const express = require('express');
const server = express();
const morgan = require("morgan");
const router = require('./routes');
const PORT = 3001;
const { conn } = require('./DB_connection');


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(morgan("dev"));
server.use(express.json());
server.use("/rickandmorty", router)

server.listen(PORT, async () => {
   try{
      await conn.sync({ force: false });
   console.log(`Server is listening on port ${PORT}`);
   }catch(error){
      console.log(error.message)
   }
});

// server.listen(PORT, ()=>{
//    console.log(`Server is listening on port ${PORT}`)
// })