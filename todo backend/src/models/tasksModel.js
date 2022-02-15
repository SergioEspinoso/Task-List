const connection = require('./connection');
const moment = require('moment');
const { ObjectId } = require('mongodb');

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
};

const getAllTasks = async () => {
  const connect = await connection();
  const allTasks = await connect.collection('tasks').find({}).toArray();
  return allTasks;
};

const getTaskById = async (id) => {
  const connect = await connection();
  const task = await connect.collection('tasks').findOne({ _id: ObjectId(id) });
  return task;
};

const updateTaskById = async (id, task, status) => {
  const connect = await connection();
  const updateTask = await connect.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: { task, status } }
  );

  return updateTask;
};

const deleteTaskById = async (id) => {
  const connect = await connection();
  const deleteTask = await connect.collection('tasks').deleteOne({ _id: ObjectId(id) });

  return deleteTask;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
}