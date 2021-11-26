const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    collections: function (req, res) {
        res.render("collections", {
            products,
            pageTitle: "Productos - Mirrorlens",
        });
    },

    detail: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => {
            return id == product.id;
        });
        if (product) {
            res.render("detail", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products,
            });
        } else {
            res.render("not-found");
        }
    },

    create: function (req, res) {
        res.render("formularioCarga", {
            pageTitle: "Crea tu producto",
        });
    },
    edit: function (req, res) {
        res.render("formularioEditor", {
            pageTitle: "Modifica tu producto",
        });
    },
    store: function (req, res) {
        if (req.file) {
            let producto = req.body;
            producto.img = req.file.filename;
            productoId = mainController.create(producto);
            res.redirect("/collections/" + productoId);
        }

        /*/ if (req.file) {
            producto.img = req.file.filename;
            productoId = mainController.create(producto);
            res.redirect("/collections/" + productoId);
        }/*/
    },
};

module.exports = controller;
