const userService = require("../services/users");
async function adminMiddleware(req, res, next) {
    res.locals.isAdmin = false;

    let emailCookie = req.cookies.userEmail;
    if (emailCookie) {
        let userCookie = await userService.findByField(emailCookie);
        req.session.admin = userCookie;
    }

    if (req.session.admin) {
        res.locals.isAdmin = true;
        res.locals.isAdmin = req.session.admin;
    }

    next();
}

module.exports = adminMiddleware;
