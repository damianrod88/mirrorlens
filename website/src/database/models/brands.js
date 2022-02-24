module.exports = function (sequelize, dataTypes) {
    let alias = "Brands";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        brand: { type: dataTypes.STRING },
    };
    let config = {
        tableName: "brands",
        timestamps: false,
    };
    let Brands = sequelize.define(alias, cols, config);

    Brands.associate = function (models) {
        Brands.hasMany(models.Products, {
            as: "products",
            foreignKey: "brand_id",
            onDelete: "CASCADE",
        });
    };
    return Brands;
};
