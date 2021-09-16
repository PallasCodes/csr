// dependencies
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// app
const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


// cors
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	next()
})


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
