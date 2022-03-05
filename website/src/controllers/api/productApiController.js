const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const productApiController = {
    list: (req, res) => {
        db.Products.findAll().then((products) => {
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
        db.Products.findByPk(req.params.id).then((product) => {
            let status = 200;

            if (!product) {
                status = 404;
            }
            let respuesta = {
                meta: {
                    status: status,
                    url: "/api/product/:id",
                },
                data: product,
            };
            res.json(respuesta);
        });
    },
};
module.exports = productApiController;
