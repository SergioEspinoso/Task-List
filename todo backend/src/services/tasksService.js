const Joi = require('joi');
const { createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById } = require('../models/tasksModel');
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
};

const getTaskByIdService = async (id) => {
  const { error } = idSchema.validate(id);

  if (error) {
    throw errorHandling(notFound, 'task not found');
  }

  const getTask = await getTaskById(id);

  return getTask;
};

const updateTaskByIdService = async (id, task, status) => {
  const { error } = idSchema.validate(id);

  if (error) {
    throw errorHandling(notFound, 'task not found');
  }

  const updateTask = await updateTaskById(id, task, status);

  return updateTask;
};

const deleteTaskBydIdService = async (id) => {
  const { error } = idSchema.validate(id);

  if (error) {
    throw errorHandling(notFound, 'task not found');
  }

  const deleteTask = await deleteTaskById(id);

  return deleteTask;
};

module.exports = {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskByIdService,
  deleteTaskBydIdService,
};