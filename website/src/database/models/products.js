module.exports = function (sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: dataTypes.STRING },
        price: { type: dataTypes.DECIMAL },
        description: { type: dataTypes.TEXT },
        border_color: { type: dataTypes.STRING },
        glass_color: { type: dataTypes.STRING },
        model: { type: dataTypes.STRING },
        image_id: { type: dataTypes.BIGINT(10).UNSIGNED },
        brand_id: { type: dataTypes.BIGINT(10).UNSIGNED },
        gender_id: { type: dataTypes.BIGINT(10).UNSIGNED },
        type_id: { type: dataTypes.BIGINT(10).UNSIGNED },
        inCart: { type: dataTypes.INTEGER },
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };
    let Products = sequelize.define(alias, cols, config);

    Products.associate = function (models) {
        Products.belongsTo(models.ImageProducts, {
            as: "imageProducts",
            foreignKey: "image_id",
            onDelete: "CASCADE",
        });

        Products.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "brand_id",
            onDelete: "CASCADE",
        });
        Products.belongsTo(models.Gender, {
            as: "Gender",
            foreignKey: "gender_id",
            onDelete: "CASCADE",
        });
        Products.belongsTo(models.Type, {
            as: "Type",
            foreignKey: "type_id",
            onDelete: "CASCADE",
        });

        Products.belongsToMany(models.Users, {
            as: "Users",
            through: "user_shop",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false,
        });
    };
    return Products;
};
