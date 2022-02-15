const { createTaskService, getAllTasksService } = require('../services/tasksService');
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


module.exports = {
  createTaskController,
  getAllTasksController,
};
