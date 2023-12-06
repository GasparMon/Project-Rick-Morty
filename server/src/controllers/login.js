const usuarios = require("../utils/users");

const getLogin = (req, res) => {
    const { email, password } = req.query;
    let access = false;

    usuarios.forEach((element) => {
        if (element.password === password && element.email === email) {
            access = true;
        }
    });

    return res.json({ access });
};

module.exports = getLogin;