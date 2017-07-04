const Todolist = require("../models/todolistModel");

const controller = {};

controller.index = (req, res) => {
  Todolist.findAll()
    .then(todolist => {
      res.json({
        data: { todolist },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

controller.show = (req, res) => {
  Todolist.findById(req.params.id)
    .then(todolist => {
      res.json({
        message: 'ok',
        data: { todolist },
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

controller.create = (req, res) => {
  Todolist.create({
    content: req.body.content,
  })
    .then(todolist => {
      res.json({ message: "ok", data: { todolist } });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

controller.update = (req, res) => {
  Todolist.update(
    {
      content: req.body.content,
    },
    req.params.id
  )
    .then(todolist => {
      res.json({
        message: "ok",
        data: { todolist },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
  Todolist.destroy(req.params.id)
    .then(() => {
      res.json({ message: "To Do Deleted" });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports = controller;
