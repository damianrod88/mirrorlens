const express = require("express");
const router = express.Router();
const mainApiController = require("../../controllers/api/mainApiController");

router.get("/", mainApiController.list);
router.get("/email/", mainApiController.email);
router.get("/last/", mainApiController.last);
router.get("/lastfive/", mainApiController.lastFive);
router.get("/:id/", mainApiController.detail);
module.exports = router;
