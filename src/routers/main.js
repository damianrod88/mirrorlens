const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mainController = require("../controllers/mainController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/productsImage"));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFileName =
            "user-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.post("/register", mainController.cRegister);

router.get("/collections", mainController.shop);
router.get("/collections/:id", mainController.detalle);
router.get("/search", mainController.search);
router.get("/create", mainController.create);
router.post("/create", upload.single("image"), mainController.store);
router.get("/modify", mainController.modify);

module.exports = router;
