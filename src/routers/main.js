const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controllers/mainController");
const validateRegMiddleware = require("../middlewares/validateRegMiddleware");

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.post("/register", validateRegMiddleware, mainController.cRegister);
router.get("/search", mainController.search);

module.exports = router;
