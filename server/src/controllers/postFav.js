const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (name && origin && status && image && species && gender) {

      await Favorite.findOrCreate({
        where: {name, origin, status, image, species, gender}
      })

      const allFavorites = await Favorite.findAll();
      return req.status(200).json(allFavorites);
    }
    return res.status(401).send("Faltan Datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postFav;
