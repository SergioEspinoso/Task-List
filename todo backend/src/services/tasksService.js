const Joi = require('joi');
const { createTask } = require('../models/tasksModel');
const { badRequest } = require('../utils/dictionary');
const errorHandling = require('../utils/errorHandling');

const taskSchema = Joi.object({
  task: Joi.string().required(),
  status: Joi.string().required(),
});

const createTaskService = async (task, status) => {
  const { error } = taskSchema.validate({ task, status });

  if (error) {
    throw errorHandling(badRequest, error.message);
  }

  const createdTask = await createTask(task, status);

  return createdTask;
};

module.exports = {
  createTaskService,
};