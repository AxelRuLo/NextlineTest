const task = require('../model/task_model')
const controllerTask = {}



async function getAll(req, res) {
    const userId = req.userid
    const allTask = await task.getAll(userId).catch(err=>err)
    res.status(allTask[1])
    res.send(allTask[0])
}

async function getTask(req, res) {
    const taskId = req.params.taskId
    const uniqueTask = await task.getTask(taskId).catch(err=>err)
    res.status(uniqueTask[1])
    res.send(uniqueTask[0])
}

async function postTask(req, res) {
    const createdTask = await task.postTask(req).catch(err=>err)
    res.status(createdTask[1])
    res.send(createdTask[0])
}

async function modifiedTask(req, res) {
    const taskId = req.params.taskId
    const modifiedTask = await task.modifiedTask(req.body.changeData,taskId).catch(err=>err)
    res.status(modifiedTask[1])
    res.send(modifiedTask[0])
}

async function deleteTask(req, res) {
    const taskId = req.params.taskId
    const deletedTask = await task.deleteTask(taskId).catch(err=>err)
    res.status(deletedTask[1])
    res.send(deletedTask[0])
}

controllerTask.getAll = getAll
controllerTask.getTask = getTask
controllerTask.postTask = postTask
controllerTask.modifiedTask = modifiedTask
controllerTask.deleteTask = deleteTask

module.exports = controllerTask;
