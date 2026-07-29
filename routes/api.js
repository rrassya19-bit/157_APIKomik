const express = require("express");
const router = express.Router();

const komikController = require("../controller/komikController");
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const genreController = require("../controller/genreController");

router.post("/register", userController.register);
router.post("/login", userController.login);

// Public
router.get("/komik", komikController.getAllKomik);
router.get("/komik/:id", komikController.getKomikById);

// Protected
router.post("/komik", authMiddleware, komikController.createKomik);
router.put("/komik/:id", authMiddleware, komikController.updateKomik);
router.delete("/komik/:id", authMiddleware, komikController.deleteKomik);

// Public
router.get("/genre", genreController.getAllGenre);
router.get("/genre/:id", genreController.getGenreById);

// Protected
router.post("/genre", authMiddleware, genreController.createGenre);
router.put("/genre/:id", authMiddleware, genreController.updateGenre);
router.delete("/genre/:id", authMiddleware, genreController.deleteGenre);

module.exports = router;