const router = require("express").Router();
const getCharById = require("../controllers/getCharById");
const { getEpisodes, SearchEpisode } = require("../controllers/getEposiodes");
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const getLogin = require("../controllers/login");

router.get("/character/:characterId", getCharById)
router.get("/login", getLogin)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

router.get("/allepisodes", getEpisodes)
router.get("/episodes/:id", SearchEpisode)

module.exports = router