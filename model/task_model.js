const connection = require('./database_connection')
const taskModel = {}


function getAll(userId) {
    const sql = 'SELECT * FROM tasks where iduser=? '

    return new Promise((resolve, reject) => {
        connection.query(sql, [userId], (err, result) => {
            if (err) {
                err.sql = ''
                reject([err, 500])
            }
            resolve([result, 200])
        })
    })
}

function getTask(taskId) {
    const sql = 'SELECT * FROM tasks where taskId=? '

    return new Promise((resolve, reject) => {
        connection.query(sql, [taskId], (err, result) => {
            if (err) {
                err.sql = ''
                reject([err, 500])
            }
            resolve([result, 200])
        })
    })
}

function postTask(req) {
    const title = req.body.title
    const description = req.body.description
    const status = req.body.status
    const userId = req.session.userid
    const tags = req.body.tags
    const manager = req.body.manager
    const comment = req.body.comment
    const sql = 'INSERT INTO tasks (title, description, status, comment, manager, tags, iduser) VALUES (?, ?, ?, ?, ?, ?, ?);'

    return new Promise((resolve, reject) => {
        connection.query(sql, [title, description, status, comment, manager, tags, userId], (err, result) => {
            if (err != null) {
                return reject([err.sqlMessage, 500])
            }
            if (result.affectedRows < 1) resolve("something went wrong creating")
            resolve(["successfully created", 201])
        })
    })
}

function modifiedTask(body, taskId) {
    let sql = 'UPDATE tasks SET '
    let dictionaryValues = []
    for (let key in body) {
        if (body.hasOwnProperty(key)) {
            dictionaryValues.push(body[key])
            sql = sql + ` ${key} = ? `
        }
    }
    sql = sql + `WHERE (taskId = ${taskId});`

    return new Promise((resolve, reject) => {
        connection.query(sql, dictionaryValues, (err, result) => {
            if (err) {
                err.sql = ''
                reject([err, 500])
            }
            resolve(['successfully updated', 200])
        })
    })
}

function deleteTask(taskId) {
    const sql = 'DELETE FROM tasks where taskId= ?'

    return new Promise((resolve, reject) => {
        connection.query(sql, [taskId], (err, result) => {
            if (err) {
                err.sql = ''
                reject([err, 500])
            }
            if (result['affectedRows'] < 1) {
                resolve(['Task was not found', 200])
            }
            resolve(['Deleted successfully', 200])

        })
    })
}

taskModel.getAll = getAll
taskModel.getTask = getTask
taskModel.postTask = postTask
taskModel.modifiedTask = modifiedTask
taskModel.deleteTask = deleteTask
module.exports = taskModel