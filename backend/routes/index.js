const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the SoftManga Demo Site Backend");
});

module.exports = router;
