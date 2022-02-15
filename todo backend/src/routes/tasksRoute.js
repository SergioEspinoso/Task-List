const express = require('express');
const { createTaskController, getAllTasksController } = require('../controllers/taskController');

const tasksRoute = express.Router();

tasksRoute.post('/', createTaskController);
tasksRoute.get('/', getAllTasksController);


module.exports = tasksRoute;