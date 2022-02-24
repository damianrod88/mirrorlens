const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que escribir el nombre del lente"),
    body("model")
        .notEmpty()
        .withMessage("Tienes que escribir el modelo del lente"),
    body("border_color")
        .notEmpty()
        .withMessage("Tienes que escribir el color del borde del lente"),
    body("glass_color")
        .notEmpty()
        .withMessage("Tienes que escribir el color del lente"),
    body("price").notEmpty().withMessage("Tienes que escribir un precio"),
    body("description")
        .notEmpty()
        .withMessage("Tienes que escribir una descripción"),
];
