const router = require("express").Router();

const getCharById = require("../controllers/getCharById");
const { getEpisodes, SearchEpisode } = require("../controllers/getEposiodes");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.get("/character/:characterId", getCharById);
router.get("/allepisodes", getEpisodes);
router.get("/episodes/:id", SearchEpisode);

router.get("/login", login);
router.post("/login", postUser);

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
