const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtasks: Array,
  status: String
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task