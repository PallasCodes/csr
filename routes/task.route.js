const express = require('express')

const router = express.Router()
const taskController = require('../controllers/task.controller')


// GET 				/tasks/all
router.get('/all', taskController.index)

// POST 			/tasks/create
router.post('/create', taskController.create)

// POST 			/tasks/delete/:taskId
router.post('/delete/:taskId', taskController.delete)

// GET 			/tasks/update/:taskId
router.get('/update/:taskId', taskController.getUpdate)

// POST 		/tasks/update/:taskId
router.post('/update/:taskId', taskController.update)


module.exports = router
