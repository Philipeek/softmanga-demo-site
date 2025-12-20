const express = require("express");
const router = express.Router();

const healthController = require("../controllers/healthController");
const demoController = require("../controllers/demoController");

router.get("/health", healthController.healthCheck);
router.get("/error-demo", demoController.throwDemoError);

module.exports = router;
