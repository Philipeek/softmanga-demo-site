const express = require("express");
const router = express.Router();

const healthController = require("../../controllers/healthController");
const demoController = require("../../controllers/demoController");
const mangaController = require("../../controllers/mangaController");

const userController = require("../../controllers/userController");

const requireAuth = require("../../middlewares/authMiddleware");
const requireRole = require("../../middlewares/roleMiddleware");

router.get("/users", userController.listUsers);
router.get("/users/:id", userController.getUser);


router.get("/health", healthController.healthCheck);
router.get("/error-demo", demoController.throwDemoError);

router.get("/mangas", mangaController.listMangas);
router.get("/mangas/:id", mangaController.getManga);

router.get("/admin/panel", requireAuth, requireRole("admin"), (req, res) => {
    res.json({
        data: {
            message: "Welcome to admin panel",
            user: req.user
        }
    });
});


module.exports = router;
