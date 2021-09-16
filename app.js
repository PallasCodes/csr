// dependencies
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


// app
const app = express()
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))


// roues
const taskRoutes = require('./routes/task.route')
app.use('/tasks', taskRoutes)

app.get('/', (req, res) => res.redirect('/tasks/all')) 


// db
mongoose
	.connect(process.env.DB_URI, {
		useUnifiedTopology: true, useNewUrlParser: true
	})
	.then(() => app.listen(process.env.PORT))
	.catch(error => console.log(error))
