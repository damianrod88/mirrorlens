const multer = require("multer");
const path = require("path");
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

module.exports = upload;
