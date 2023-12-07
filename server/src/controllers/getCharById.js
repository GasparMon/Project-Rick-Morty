const axios = require("axios");
const express = require("express");
const server = express();

server.use(express.json());

// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { id, status, species, origin, image, gender, location, name } = data;
//       const character = {
//         id,
//         status,
//         name,
//         species,
//         origin,
//         image,
//         gender,
//         location,
//       };

//       return character.name
//         ? res.status(200).json(character)
//         : res.status(400).send("Not found");
//     })
//     .catch((error) => res.status(500).send(error.message));
// };

const getCharById = async (req, res) => {

try{

  const {characterId} = req.params

  const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);

  const { id, status, species, origin, image, gender, location, name } = data

  const character = {
    id,
    status,
    name,
    species,
    origin,
    image,
    gender,
    location,
  };

  return character.name
        ? res.status(200).json(character)
        : res.status(400).send("Not found");

}catch (error) {
  return res.status(500).send(error.message);

}
}

module.exports = getCharById;
