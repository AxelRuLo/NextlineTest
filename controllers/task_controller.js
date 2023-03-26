const task = require('../model/task_model')
const controllerTask = {}



async function getAll(req, res) {
    const userId = req.session.userid
    const allTask = await task.getAll(userId)
    res.send(allTask)
}

async function getTask(req, res) {
    const taskId = req.params.taskId
    const uniqueTask = await task.getTask(taskId)
    res.send(uniqueTask)
}

async function postTask(req, res) {
    const createdTask = await task.postTask(req)
    res.send(createdTask)
}

async function modifiedTask(req, res) {
    const modifiedTask = await task.modifiedTask(req.body)
    res.send(modifiedTask)
}

async function deleteTask(req, res) {
    const taskId = req.params.taskId
    const deletedTask = await task.deleteTask(taskId)
    res.send(deletedTask)
}

controllerTask.getAll = getAll
controllerTask.getTask = getTask
controllerTask.postTask = postTask
controllerTask.modifiedTask = modifiedTask
controllerTask.deleteTask = deleteTask

module.exports = controllerTask;
