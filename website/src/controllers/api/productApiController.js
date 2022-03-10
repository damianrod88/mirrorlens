const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productApiController = {
    list: (req, res) => {
        db.Products.findAll({
            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "brands",
                },
                {
                    association: "Gender",
                },
                {
                    association: "Type",
                },
            ],
        }).then((products) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "api/products",
                },
                data: products,
            };
            res.json(respuesta);
        });
    },
    detail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "brands",
                },
                {
                    association: "Gender",
                },
                {
                    association: "Type",
                },
            ],
        }).then((product) => {
            let status = 200;

            if (!product) {
                status = 404;
            }
            let respuesta = {
                meta: {
                    status: status,
                    url: "/api/products/:id",
                },
                data: product,
            };
            res.json(respuesta);
        });
    },
    last: async (req, res) => {
        const product = await db.Products.findOne({
            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "brands",
                },
                {
                    association: "Gender",
                },
                {
                    association: "Type",
                },
            ],
            order: [["id", "DESC"]],
            limit: 1,
        });
        const response = {
            meta: {
                status: 200,
                total: 1,
                url: "/api/products/last",
            },
            data: product,
        };
        res.json(response);
    },
    search: async (req, res) => {
        let search = req.query.search;
        const product = await db.Products.findAll({
            where: {
                name: { [Op.like]: search + "%" },
            },

            include: [
                {
                    association: "imageProducts",
                },
                {
                    association: "brands",
                },
                {
                    association: "Gender",
                },
                {
                    association: "Type",
                },
            ],
        });
        const response = {
            meta: {
                status: 200,
                total: 1,
                url: "/api/products/search",
            },
            data: product,
        };
        res.json(response);
    },
    brands: (req, res) => {
        db.Brands.findAll().then((brands) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: brands.length,
                    url: "api/products/brands",
                },
                data: brands,
            };
            res.json(respuesta);
        });
    },
};
module.exports = productApiController;
