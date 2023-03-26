const { Router } = require('express');
const task_controller = require('../controllers/task_controller')
const router = Router();

router.get('/all/', async (req, res) => {
    task_controller.getAll(req,res)
})

router.get('/unique/:taskId', async (req, res) => {
    task_controller.getTask(req,res)
})

router.post('/new-task/', async (req, res) => {
    task_controller.postTask(req,res)
})

router.put('/modified-task/', async (req, res) => {
    task_controller.modifiedTask(req,res)
})

router.delete('/delete/:taskId', async (req, res) => {
    task_controller.deleteTask(req,res)
})

module.exports = router