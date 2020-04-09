//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
const db = mongoose.connection

//Configuration
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// const partsController = require('./controllers/parts.js')
// app.use(partsController)

//Routes
//Home
app.get('/', (req, res) => {
  res.render('home.ejs')
})

//Resume
app.get('/resume', (req, res) => {
  res.render('resume.ejs')
})

//Projects
app.get('/projects', (req, res) => {
  res.render('projects.ejs')
})

//GitHub
app.get('/github', (req, res) => {
  res.render('github.ejs')
})

//Listener
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})

//Mongoose
mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
  console.log('connected to mongodb')
})
