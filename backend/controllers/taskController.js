const Task = require("../models/Task");

// GET TASKS
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({

      user: req.user.id,

    });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });
  }
};

// CREATE TASK
const createTask = async (req, res) => {

  try {

    const { title } = req.body;

    const task = await Task.create({

      title,

      completed: false,

      user: req.user.id,

    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {

  try {

    const updatedTask =
      await Task.findOneAndUpdate(

        {
          _id: req.params.id,
          user: req.user.id,
        },

        {
          $set: req.body,
        },

        {
          new: true,
        }

      );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({

      message: error.message,
    });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {

  try {

    await Task.findOneAndDelete({

      _id: req.params.id,

      user: req.user.id,

    });

    res.json({

      message: "Task Deleted",

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });
  }
};

module.exports = {

  getTasks,

  createTask,

  updateTask,

  deleteTask,

};