const user = require('../model/user_model')
const controllerUser = {}

async function login(req, res) {
    const username = req.body.username
    const password = req.body.password
    const session = req.session

    if (username == '' || password == '') {
        res.send('username and password must be provided').status(204)
    }

    const result = await user.login(username, password)
    if (result[0]['iduser']) session.userid = result[0]['iduser']

    res.send(result)
}

async function logout(req, res) {
    const session = req.session
    session.destroy()
    res.send('session destroyed').status(200)
}

controllerUser.login = login
controllerUser.logout = logout


module.exports = controllerUser;
