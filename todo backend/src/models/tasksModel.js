const connection = require('./connection');
const moment = require('moment');

const createTask = async (task, status) => {
  const connect = await connection();
  const createdAt = moment().format('DD-MM-YYYY HH:mm:ss');
  const { insertedId } = await connect.collection('tasks').insertOne({ task, status, createdAt });
  return {
    id: insertedId,
    task,
    status,
    createdAt
  };
}

const getAllTasks = async () => {
  const connect = await connection();
  const allTasks = await connect.collection('tasks').find({}).toArray();
  return allTasks;
}

module.exports = {
  createTask,
  getAllTasks,
}