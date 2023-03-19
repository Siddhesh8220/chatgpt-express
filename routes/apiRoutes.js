const express = require("express");
const router = express.Router();

const gptRoutes = require("../components/gpt/index")

router.use("/gpt", gptRoutes)

module.exports = router
