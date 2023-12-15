const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      res.status(401).send("Faltan datos");
    } else {
      await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
      });

      const allFav = await Favorite.findAll();
      res.status(200).json(allFav);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postFav;