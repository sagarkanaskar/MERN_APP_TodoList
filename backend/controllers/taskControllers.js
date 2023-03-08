const Task = require("../models/taskModel");

//create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log("record created");
    res.status(200).json(task);
  } catch (e) {
    console.log("error", e.message);
    res.status(500).send({ msg: e.message });
  }
};

//get a all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (e) {
    console.log("error", e.message);
    res.status(500).send({ msg: e.message });
  }
};

//get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`);
    }
    res.status(200).json(task);
  } catch (e) {
    console.log("error", e.message);
    res.status(500).send({ msg: e.message });
  }
};

//delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`);
    }
    res.status(200).send("Task deleted");
  } catch (e) {
    console.log("error", e.message);
    res.status(500).send({ msg: e.message });
  }
};

//update task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
      if (!task) {
        return res.status(404).json(`No Task with id: ${id}`);
      }
    res.status(200).json(task);
  } catch (e) {
    console.log("error", e.message);
    res.status(500).send({ msg: e.message });
  }
};

module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };
