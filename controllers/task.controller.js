const Task = require('../models/task.model')


exports.index = async (req, res) => {
	const tasks = await Task.find()
	res.json(tasks)
}


exports.create = async (req, res) => {
	const task = new Task({
		title: req.body.title,
		description: req.body.description
	})

	const newTask = await task.save()
	res.json(newTask)
}


exports.delete = async (req, res) => {
	const taskId = req.params.taskId

	await Task.deleteOne({ _id: taskId })
	res.json({message: "task deleted"})
}


exports.update = async (req, res) => {
	const taskId = req.params.taskId	

	const task = {
		title: req.body.title,
		description: req.body.description
	}
	const updatedTask = await Task.findOneAndUpdate({_id: taskId }, task)
	task._id = taskId
	res.json(task)	
}
