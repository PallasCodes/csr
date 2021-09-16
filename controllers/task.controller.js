const Task = require('../models/task.model')


exports.index = async (req, res) => {
	const tasks = await Task.find()
	res.render('index', { tasks, task: null })
}


exports.create = async (req, res) => {
	const task = new Task({
		title: req.body.title,
		description: req.body.description
	})

	await task.save()
	res.redirect('/tasks/all')
}


exports.delete = async (req, res) => {
	const taskId = req.params.taskId

	await Task.deleteOne({ _id: taskId })
	res.redirect('/tasks/all')
}


exports.getUpdate = async (req, res) => {
	const taskId = req.params.taskId

	const tasks = await Task.find()
	const task = await Task.findById(taskId)
	console.log(task)
	res.render('index', { tasks, task })
}


exports.update = async (req, res) => {
	const taskId = req.params.taskId	

	const task = {
		title: req.body.title,
		description: req.body.description
	}
	await Task.findOneAndUpdate({_id: taskId }, task)
	res.redirect('/tasks/all')	
}
