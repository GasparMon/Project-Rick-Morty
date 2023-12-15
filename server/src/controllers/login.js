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

    if (!email || !password) {
      res.status(400).send("faltan datos");
    } else {
      const userLogin = await User.findOne({ where: { email } });

      if (!userLogin) {
        res.status(404).send("Usuario no encontrado");
      } else {
        if (userLogin.password === password) {
          res.status(200).json({
            access: true,
          });
        } else {
          res.status(403).send("Contraseña incorrecta");
        }
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = login;
