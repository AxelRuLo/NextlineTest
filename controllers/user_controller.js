const user = require("../model/user_model");
const jwt = require('jsonwebtoken');
const controllerUser = {};

async function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username == "" || password == "") {
        return res.send("username and password must be provided").status(204);
    }

    const result = await user.login(username, password).catch((err) => err);
    const idUser = result[0]['iduser']
    if (idUser != null) {
        return jwt.sign({user:idUser}, 'nextline',{
            expiresIn: "1h"
        }, (err, token) => {
            if (err) {
                res.status(400).send({ msg: 'Error' })
            }
            else {
                res.send({ msg: 'success', token: token })
            }
        })
    };

    res.send(result);
}


controllerUser.login = login;

module.exports = controllerUser;
