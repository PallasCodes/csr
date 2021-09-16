const express = require('express')

const router = express.Router()
const taskController = require('../controllers/task.controller')


// GET 				/tasks
router.get('', taskController.index)

// POST 			/tasks
router.post('', taskController.create)

// DELETE 		/tasks/:taskId
router.delete('/:taskId', taskController.delete)

// PUT 				/tasks/:taskId
router.put('/:taskId', taskController.update)


module.exports = router
