const axios = require("axios");

function getCharById(response, id) {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };

      response
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch(error => {
      response
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(JSON.stringify({ message: "Id is not found, try with a new one" }));
    });
}

module.exports = getCharById;
