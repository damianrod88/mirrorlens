const { json } = require("express");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const productsFileUser = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(productsFileUser, "utf-8"));

const mainController = {
    home: function (req, res) {
        res.render("home", { products });
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
    shop: function (req, res) {
        res.render("shop", { products, pageTitle: "Productos - Mirrorlens" });
    },
    products: function (req, res) {
        res.render("products", { products });
    },
    cart: function (req, res) {
        res.render("cart", {
            pageTitle: "Carrito",
        });
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => {
            return id == product.id;
        });
        if (product) {
            res.render("products", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products,
            });
        } else {
            res.render("not-found");
        }
    },
    search: function (req, res) {
        let busqueda = req.query.search;
        let precioMax = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].name.includes(busqueda.toUpperCase())) {
                precioMax.push(products[i]);
            }
        }
        res.render("productsResult", { precioMax: precioMax });
    },
    create: function (req, res) {
        res.render("formularioCarga", {
            pageTitle: "Crea tu producto",
        });
    },
    modify: function (req, res) {
        res.render("formularioEditor", {
            pageTitle: "Modifica tu producto",
        });
    },
    store: function (req, res) {
        let producto = {
            nombre: req.body.nombre,
            img: req.file.filename,
            model: req.body.model,
            color: req.body.color,
            price: req.body.price,
            descr: req.body.descr,
            moneda: req.body.moneda,
        };

        const pro = fs.readFileSync(
            path.join(__dirname, "../data/producto.json"),
            "utf-8"
        );
        let prod;
        if (pro == "") {
            prod = [];
        } else {
            prod = JSON.parse(pro);
        }
        prod.push(producto);

        productoJSON = JSON.stringify(prod);
        fs.writeFileSync(
            path.join(__dirname, "../data/producto.json"),
            usuarioJSON
        );
        if (req.file) {
            producto.img = req.file.filename;
            productoId = mainController.create(producto);
            res.redirect("/collections/" + productoId);
        }
    },
    cRegister: function (req, res) {
        let usuario = {
            nombre: req.body.nombre,
            user: req.body.user,
            mail: req.body.mail,
            birdate: req.body.birdate,
            direction: req.body.direction,
            pass: req.body.pass,
            repass: req.body.repass,
        };
        const userss = fs.readFileSync(
            path.join(__dirname, "../data/userss.json"),
            "utf-8"
        );
        let usuarios;
        if (userss == "") {
            usuarios = [];
        } else {
            usuarios = JSON.parse(userss);
        }
        usuarios.push(usuario);
        //users.push(usuario);
        usuarioJSON = JSON.stringify(usuarios);
        fs.writeFileSync(
            path.join(__dirname, "../data/userss.json"),
            usuarioJSON
        );
        res.render("thanksForR");
    },
};

module.exports = mainController;
