const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");
const userService = require("../services/users");
const productService = require("../services/products");
const controller = {
    home: function (req, res) {
        res.render("home", { products: productService.products });
    },
    login: function (req, res) {
        res.render("login", {
            pageTitle: "Ingresa",
        });
    },
    register: function (req, res) {
        res.render("register", {
            pageTitle: "Crea tu cuenta",
        });
    },

    cart: function (req, res) {
        res.render("cart", {
            pageTitle: "Carrito",
        });
    },

    search: function (req, res) {
        let busqueda = req.query.search;
        let search = [];
        for (let i = 0; i < productService.products.length; i++) {
            if (
                productService.products[i].name
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            ) {
                search.push(productService.products[i]);
            }
        }
        res.render("results", { search: search });
    },

    cRegister: function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userInD = userService.findByField("email", req.body.email);

        if (userInD) {
            return res.render("register", {
                errors: {
                    mail: {
                        msg: "Este email ya está registrado",
                    },
                },
                oldData: req.body,
            });
        }
        userService.createUser(req.body);
        return res.render("thanksForR");
    },
};

module.exports = controller;
