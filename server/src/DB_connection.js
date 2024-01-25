require('dotenv').config();
const { Sequelize } = require('sequelize');
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/Users');
const userBD = process.env.DB_USER;
const passwordBD = process.env.DB_PASSWORD;
const hostDB = process.env.DB_HOST;
const database = process.env.DATABASE;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://postgres:root@localhost:5432/rickandmorty`,
   
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize);
UserModel(sequelize);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
