// const usuarios = require("../utils/users");

// const getLogin = (req, res) => {
//     const { email, password } = req.query;
//     let access = false;

//     usuarios.forEach((element) => {
//         if (element.password === password && element.email === email) {
//             access = true;
//         }
//     });

//     return res.json({ access });
// };

// module.exports = getLogin;

const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (email && password) {
      const userLogin = await User.findOne({ where: { email } });

      if (userLogin) {
        if(userLogin.password === password){
          return res.status(200).json({access: true})
        }
        return res.status(400).send("Contraseña Incorrecta")
      }
      return res.status(400).send("Usuario no encontrado");
    }
    return res.status(400).send("Faltan Datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = login;
