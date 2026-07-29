const express = require("express");
const router = express.Router();

const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

