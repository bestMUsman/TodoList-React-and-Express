const Todolist = require('../models/todolistModel');

const controller = {};

controller.index = (req, res) => {
    Todolist.findAll()
        .then(todolist => {
            res.render('todolist/todolist-index', {
                todolist,
            })
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

controller.create = (req, res) => {
    Todolist.create({
            content: req.body.content,
            checked: req.body.checked,
        })
        .then(todolist => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

controller.edit = (req, res) => {
    Todolist.findById(req.params.id)
        .then(todolist => {
            res.render('/', {
                todolist: todolist,
                id: req.params.id,
            });
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

controller.update = (req, res) => {
    Todolist.update({
        content: req.body.content,
        checked: req.body.checked,
        id: req.body.id,
    }, req.params.id)
    .then(todolist => {
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).json(err);
    });
};



controller.destroy = (req, res) => {
    Todolist.destroy(req.params.id)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports = controller;