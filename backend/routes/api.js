const express = require("express");
const router = express.Router();

const healthController = require("../controllers/healthController");
const demoController = require("../controllers/demoController");
const mangaController = require("../controllers/mangaController");

router.get("/health", healthController.healthCheck);
router.get("/error-demo", demoController.throwDemoError);

// Demo DB endpoint
router.get("/mangas", mangaController.listMangas);
router.get("/mangas/:id", mangaController.getManga);

module.exports = router;
