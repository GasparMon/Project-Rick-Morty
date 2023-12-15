// let myFavorites = [];

// const postFav = (req, res) => {
//   const { id } = req.body;

//   let isAlreadyInList = false;

//   myFavorites.forEach((element) => {
//     if (element.id === Number(id)) {
//       isAlreadyInList = true;

//       return res.json({ message: "Character is already in your list" });
//     }
//   });

//   if (!isAlreadyInList) {
//     myFavorites.push(req.body);

//     return res.json(myFavorites);
//   }
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;

//   myFavorites = myFavorites.filter((element) => element.id !== Number(id));

//   return res.json(myFavorites);
// };

// module.exports = { postFav, deleteFav };
