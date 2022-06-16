const controller = require('../controllers/controller')

function apiRoutes(app) {

  // Get all tasks
  app.get('/api/listAll', controller.listTasks)

  // Create a new task
  app.post('/api/newTask', controller.createTask)

  // Edit a task
  app.put('/api/editTask', controller.editTask)

  // Delete a task
  app.delete('/api/deleteTask/:_id', controller.deleteTask)

}

module.exports = apiRoutes
