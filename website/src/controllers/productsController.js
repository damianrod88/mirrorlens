const productService = require("../services/products");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const controller = {
    collections: async function (req, res) {
        let brands = await productService.getBrands();
        res.render("collections", {
            products: await productService.getAll(),
            pageTitle: "Productos - Mirrorlens",
            name: "Lentes de sol",
            brands: brands,
        });
    },
    women: async function (req, res) {
        res.render("collections", {
            products: await productService.getAllWomen(),
            pageTitle: "For women - Mirrorlens",
            name: "Lentes de Mujer",
        });
    },
    men: async function (req, res) {
        res.render("collections", {
            products: await productService.getAllMen(),
            pageTitle: "For men - Mirrorlens",
            name: "Lentes de Hombre",
        });
    },
    unisex: async function (req, res) {
        res.render("collections", {
            products: await productService.getAllUnisex(),
            pageTitle: "Unisex - Mirrorlens",
            name: "Lentes Unisex",
        });
    },

    detail: async (req, res) => {
        const id = req.params.id;

        const product = await productService.findOne(id);
        res.locals.product = product;
        if (product) {
            res.render("detail", {
                product,
                pageTitle: product.name + " - Mirrorlens",
                products: await productService.getAll(),
            });
        } else {
            res.render("not-found");
        }
    },

    create: async function (req, res) {
        let brands = await productService.getBrands();
        let types = await productService.getType();
        let genders = await productService.getGender();
        res.render("createProd", {
            pageTitle: "Crea tu producto",
            brands: brands,
            genders: genders,
            types: types,
        });
    },
    edit: async function (req, res) {
        let brands = await productService.getBrands();
        let types = await productService.getType();
        let genders = await productService.getGender();
        const id = req.params.id;
        const product = await productService.findOne(id);
        res.render("editProd", {
            product: product,
            pageTitle: "Editando: " + product.name,
            brands: brands,
            genders: genders,
            types: types,
        });
    },

    update: async (req, res, files) => {
        let brands = await productService.getBrands();
        let types = await productService.getType();
        let genders = await productService.getGender();
        const id = req.params.id;
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            const product = await productService.findOne(id);
            return res.render("editProd", {
                pageTitle: "Editando: " + product.name,
                errors: resultValidation.mapped(),
                product: product,
                oldData: req.body,
                brands: brands,
                genders: genders,
                types: types,
            });
        }

        await productService.updateOne(id, req.body, req.files);

        res.redirect(`/collections/${id}`);
    },

    store: async function (req, res) {
        let brands = await productService.getBrands();
        let types = await productService.getType();
        let genders = await productService.getGender();
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("createProd", {
                pageTitle: "Crea tu producto",
                errors: resultValidation.mapped(),
                oldData: req.body,
                brands: brands,
                genders: genders,
                types: types,
            });
        }
        await productService.createOne(req.body, req.files);
        res.redirect("/collections/");
    },
    destroy: function (req, res) {
        const id = req.params.id;
        productService.deleteOne(id);
        res.redirect("/collections/");
    },
};

module.exports = controller;
