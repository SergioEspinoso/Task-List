const express = require('express');
const { createTaskController,
  getAllTasksController, getTasksByIdController } = require('../controllers/taskController');

const tasksRoute = express.Router();

tasksRoute.get('/', getAllTasksController);
tasksRoute.get('/:id', getTasksByIdController);
tasksRoute.post('/', createTaskController);

module.exports = tasksRoute;