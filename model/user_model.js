const connection = require('./database_connection')
const userModel = {}


function login(username, password) {
    const sql = 'SELECT iduser FROM users where username= ? and password= ?'

    return new Promise((resolve, reject) => {
        connection.query(sql, [username, password], (err, result) => {
            if (err) {
                reject(err)
            }
            if (result.length < 1) {
                resolve("User not found")
            }
            resolve(result)
        })
    })
}

userModel.login = login
module.exports = userModel