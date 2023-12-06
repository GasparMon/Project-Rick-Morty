const router = require("express").Router();
const getCharById = require("../controllers/getCharById");
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const getLogin = require("../controllers/login");

router.get("/character/:id", getCharById)
router.get("/login", getLogin)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router