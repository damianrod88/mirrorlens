const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

function saveProducts() {
    const save = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, save, "utf-8");
}

module.exports = {
    products,
    saveProducts,

    createOne(body, file) {
        let producto = {
            id: Date.now(),
            ...body,
        };
        if (file) {
            producto.img = file.filename;
        }

        products.push(producto);

        saveProducts();
    },

    findOne(id) {
        const product = products.find((product) => {
            return id == product.id;
        });
        return product;
    },

    updateOne(id, body) {
        const indice = products.findIndex((prod) => {
            return prod.id == id;
        });
        const productoEncontrado = {
            id: products[indice].id,
            ...body,
        };
        products[indice] = productoEncontrado;

        saveProducts();
    },
};
