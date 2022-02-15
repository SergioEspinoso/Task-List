const { createTaskService } = require('../services/tasksService');
const { created } = require('../utils/dictionary');

const createTaskController = async (req, res, next) => {
  try {
    const { task, status } = req.body;
    const createTask = await createTaskService(task, status);
    return res.status(created).json(createTask);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTaskController,
};
