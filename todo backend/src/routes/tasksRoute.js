const express = require('express');
const { createTaskController,
  getAllTasksController,
  getTasksByIdController,
  updateTaskByIdController } = require('../controllers/taskController');

const tasksRoute = express.Router();

tasksRoute.get('/', getAllTasksController);

tasksRoute.get('/:id', getTasksByIdController);

tasksRoute.post('/', createTaskController);

tasksRoute.put('/:id', updateTaskByIdController);

module.exports = tasksRoute;