const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const mainApiController = {
    list: async (req, res) => {
        let limit = parseInt(req.query.limit);
        const limite = limit ? limit : 10;
        let page = parseInt(req.query.page);
        const offset = page ? (page - 1) * limit : 0;
        const { count, rows } = await db.Users.findAndCountAll({
            offset: offset,
            limit: limite,
        });
        const users = rows.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                direction: user.direction,
                photo_user: user.photo_user,
            };
        });
        let status = 200;

        if (users == "") {
            status = 404;
        }
        const nextPage = page ? page + 1 : 2;
        const previousPage = page - 1;
        const totalPages = Math.ceil(count / limite);

        let previous =
            page > 1
                ? `http://localhost:3001/api/users/?page=${previousPage}&limit=${limite}`
                : null;
        let next =
            page < totalPages || !page
                ? `http://localhost:3001/api/users/?page=${nextPage}&limit=${limite}`
                : null;
        let response = {
            meta: {
                status: status,
                total: count,
                url: "api/users",
                current: page ? page : 1,
                totalPages: totalPages,
                next: next,
                previous: previous,
            },
            data: users,
        };
        res.json(response);
        /* db.Users.findAll().then((users) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "api/users",
                },
                data: users,
            };
            res.json(respuesta);
        }); */
    },
    detail: (req, res) => {
        db.Users.findByPk(req.params.id).then((user) => {
            let status = 200;

            if (!user) {
                status = 404;
            }
            let respuesta = {
                meta: {
                    status: status,
                    url: "/api/user/:id",
                },
                data: user,
            };
            res.json(respuesta);
        });
    },
};
module.exports = mainApiController;
