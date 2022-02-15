const { createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskByIdService } = require('../services/tasksService');
const { created, success } = require('../utils/dictionary');

const createTaskController = async (req, res, next) => {
  try {
    const { task, status } = req.body;
    const createTask = await createTaskService(task, status);
    return res.status(created).json(createTask);
  } catch (error) {
    next(error);
  }
};

const getAllTasksController = async (_req, res, next) => {
  try {
    const getAllTasks = await getAllTasksService();
    return res.status(success).json(getAllTasks);
  } catch (error) {
    next(error);
  }
};

const getTasksByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idFound = await getTaskByIdService(id);
    return res.status(success).json(idFound);
  } catch (error) {
    next(error);
  }
};

const updateTaskByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { task, status } = req.body;

    const update = await updateTaskByIdService(id, task, status);

    return res.status(success).json({ id, task, status });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTaskController,
  getAllTasksController,
  getTasksByIdController,
  updateTaskByIdController,
};
