const axios = require("axios");

const getEpisodes = async (req, res) => {
  let allEpisodes = [];
  try {
    let nextPage = "https://rickandmortyapi.com/api/episode";

    while (nextPage) {
      const { data } = await axios.get(nextPage);
      const result = data.results;

      allEpisodes = [...allEpisodes, ...result];
      nextPage = data.info.next;
    }

    if (allEpisodes.length > 0) {
      return res.status(200).json(allEpisodes);
    } else {
      return res
        .status(400)
        .json({ message: "No existe informacion de los episodios" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos de la API externa" });
  }
};

const SearchEpisode = async (req, res) => {
    try {
      const { id } = req.params;
      let nextPage = "https://rickandmortyapi.com/api/episode";
      let myEpisode = [];
  
      while (nextPage) {
        const { data } = await axios.get(nextPage);
        const result = data.results;
  
       myEpisode = result.filter((element) => element.id === Number(id));
  
        if (myEpisode.length > 0) {
          break;
        } else {
          nextPage = data.info.next;
        }
      }
  
      if (myEpisode.length > 0) {
        return res.status(200).json(myEpisode[0]);
      } else {
        return res
          .status(400)
          .json({ message: "No existe informacion de los episodios" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener datos de la API externa" });
    }
  };

module.exports = { getEpisodes, SearchEpisode };

// res.status(200).json(data.info.pages);
//   res.status(400).json({ message: "No se encontraron episodios" });
