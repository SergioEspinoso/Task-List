const Joi = require('joi');
const { createTask, getAllTasks, getTaskById } = require('../models/tasksModel');
const { badRequest, notFound } = require('../utils/dictionary');
const errorHandling = require('../utils/errorHandling');

const taskSchema = Joi.object({
  task: Joi.string().required(),
  status: Joi.string().required(),
});

const idSchema = Joi.string().length(24);

const createTaskService = async (task, status) => {
  const { error } = taskSchema.validate({ task, status });

  if (error) {
    throw errorHandling(badRequest, error.message);
  }

  const createdTask = await createTask(task, status);

  return createdTask;
};

const getAllTasksService = async () => {
  const getAll = await getAllTasks();

  return getAll;
}

const getTaskByIdService = async (id) => {
  const { error } = idSchema.validate(id);

  if (error) {
    throw errorHandling(notFound, 'task not found');
  }

  const getTask = await getTaskById(id);

  return getTask;
}

module.exports = {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
};