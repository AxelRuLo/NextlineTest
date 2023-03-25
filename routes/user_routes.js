const { Router } = require("express");
const user_controller = require('../controllers/user_controller')
const router = Router();

router.post('/login', async (req, res) => {
    user_controller.login(req,res)
})

router.delete('/logout', async (req, res) => {
    user_controller.logout(req,res)
})

module.exports = router
