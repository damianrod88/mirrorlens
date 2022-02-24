module.exports = function (sequelize, dataTypes) {
    let alias = "UserShop";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: { type: dataTypes.BIGINT(10).UNSIGNED },
        product_id: { type: dataTypes.BIGINT(10).UNSIGNED },
    };
    let config = {
        tableName: "user_shop",
        timestamps: false,
    };
    let UserShop = sequelize.define(alias, cols, config);

    return UserShop;
};
