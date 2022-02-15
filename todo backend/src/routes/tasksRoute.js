const express = require('express');
const { createTaskController,
  getAllTasksController,
  getTasksByIdController,
  updateTaskByIdController,
  deleteTaskByIdController } = require('../controllers/taskController');

const tasksRoute = express.Router();

tasksRoute.get('/', getAllTasksController);

tasksRoute.get('/:id', getTasksByIdController);

tasksRoute.post('/', createTaskController);

tasksRoute.put('/:id', updateTaskByIdController);

tasksRoute.delete('/:id', deleteTaskByIdController);

module.exports = tasksRoute;