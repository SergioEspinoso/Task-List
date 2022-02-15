const express = require('express');
const { createTaskController } = require('../controllers/taskController');

const tasksRoute = express.Router();

tasksRoute.post('/', createTaskController);

module.exports = tasksRoute;