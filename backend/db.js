const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const mongoURI = process.env.MONGOURI
// console.log(mongoURI)
mongoose.connect(mongoURI)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}