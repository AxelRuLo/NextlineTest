const connection = require('./database_connection')
const taskModel = {}


function getAll(userId) {
    const sql = 'SELECT * FROM tasks where iduser=? '

    return new Promise((resolve, reject) => {
        connection.query(sql, [userId], (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

function getTask(taskId) {
    const sql = 'SELECT * FROM tasks where taskId=? '

    return new Promise((resolve, reject) => {
        connection.query(sql, [taskId], (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
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
        connection.query(sql, [title,description,status,comment,manager,tags,userId], (err, result) => {
            if (err) {
                reject(err)
            }
            if(result.affectedRows<1)resolve("something went wrong creating")
            resolve("success")
        })
    })
}

function modifiedTask(body) {
    let sql = 'UPDATE tasks SET '

    sql = sql + ' WHERE (`taskId` = );'

    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

function deleteTask(taskId) {
    const sql = 'DELETE FROM tasks where taskId= ?'

    return new Promise((resolve, reject) => {
        connection.query(sql, [taskId], (err, result) => {
            if (err) {
                reject(err)
            }
            if (result['affectedRows'] < 1) {
                resolve('Task was not found')
            }
            resolve('Deleted successfully')

        })
    })
}

taskModel.getAll = getAll
taskModel.getTask = getTask
taskModel.postTask = postTask
taskModel.modifiedTask = modifiedTask
taskModel.deleteTask = deleteTask
module.exports = taskModel