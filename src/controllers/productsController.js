const productService = require("../services/products");
const controller = {
    collections: function (req, res) {
        res.render("collections", {
            products: productService.products,
            pageTitle: "Productos - Mirrorlens",
        });
    },

    detail: (req, res) => {
        const id = req.params.id;
        const product = productService.findOne(id);
        if (product) {
            res.render("detail", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products: productService.products,
            });
        } else {
            res.render("not-found");
        }
    },

    create: function (req, res) {
        res.render("createProd", {
            pageTitle: "Crea tu producto",
        });
    },
    edit: function (req, res) {
        const product = productService.findOne(id);
        res.render("formularioEditor", {
            product: productoEncontrado,
            pageTitle: "Modifica tu producto",
        });
    },
    store: function (req, res) {
        let producto = {
            id: Date.now(),
            ...req.body,
        };
        if (req.file) {
            producto.img = req.file.filename;
        }

        productService.products.push(producto);
        res.redirect("/collections/" + producto.id);

        productService.saveProducts();

        /*/ if (req.file) {
            producto.img = req.file.filename;
            productoId = mainController.create(producto);
            res.redirect("/collections/" + productoId);
        }/*/
    },
};

module.exports = controller;
