const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");

http
  .createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    if (request.url.includes( "/rickandmorty/character")) {
      const id = request.url.split("/").pop();
      
      getCharById(response, id)

    } else {
      return response
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ comment: "Endpoint not found" }));
    }
  })
  .listen(PORT, "localhost", () => {
    console.log(`Server Listening in PORT ${PORT}`);
  });