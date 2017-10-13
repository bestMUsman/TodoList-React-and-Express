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
        message: "ok",
        data: { todolist },
      });
    })
    .catch(err => {
      res.status(400).json({ message: "400", err });
    });
};

controller.create = (req, res) => {
  Todolist.findLength().then(len => {
    Todolist.create({
      content: req.body.content,
      position: Number(len[0].count) + 1,
    })
      .then(todolist => {
        res.json({ message: "ok", data: { todolist } });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ message: "400", err });
      });
  });
};

controller.update = (req, res) => {
  Todolist.update(
    {
      content: req.body.content,
      checked: req.body.checked,
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

controller.updateOrder = (req, res) => {
  let itemsId = req.body.itemsId;
  for (let i = 0; i < itemsId.length; i++) {
    Todolist.updateOrder({
      index: i,
      id: itemsId[i],
    });
  }
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
