const express = require("express");
const { chat } = require("./controller");
const router = express.Router();

router.get("/chat", chat);

module.exports = router;
