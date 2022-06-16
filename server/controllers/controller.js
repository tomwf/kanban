const Task = require('../models/Task')

module.exports = {

  createTask(req, res) {
    const { title, description, subtasks, status } = req.body
    const task = new Task({ title, description, subtasks, status})

    task
      .save()
      .then(response => res.send(response))
      .catch(err => console.error(err))
  },

  listTasks(req, res) {
    Task.find((err, docs) => {
      if (err) console.error(err)

      res.send(docs)
    })
  },

  editTask(req, res) {
    const { _id, title, description, subtasks, status } = req.body

    Task.findOneAndUpdate(
      { _id },
      {
        title,
        description,
        subtasks,
        status
      },
      (err, docs) => {
        if (err) console.error(err)

        res.send('Task Update was successful!')
    })
  },

  deleteTask(req, res) {
    const { _id } = req.params

    Task.deleteOne({ _id }, (err, docs) => {
      if (err) console.error(err)

      res.send('Task was successfully deleted!')
    })
  }

}
