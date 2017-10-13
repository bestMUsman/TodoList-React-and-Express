const db = require("../db/config");

const Todolist = {};

Todolist.findAll = () => {
  return db.query("SELECT * FROM thingstodo ORDER BY position DESC");
};

Todolist.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM thingstodo
    WHERE id = $1`,
    [id]
  );
};

Todolist.create = todolist => {
  return db.one(
    `
        insert into thingstodo 
        (content, checked, position)
        values
        ($1, $2, $3) returning *
        `,
    [todolist.content, "false", todolist.position]
  );
};

Todolist.findLength = () => {
  return db.query("SELECT COUNT(id) FROM thingstodo");
};

Todolist.update = (todolist, id) => {
  return db.none(
    `
        update thingstodo set
        content = $1,
        checked = $2
        where id = $3
        RETURNING *
        `,
    [todolist.content, todolist.checked, id]
  );
};

Todolist.updateOrder = todolist => {
  console.log("hello");
  db.none(
    `
        update thingstodo set
        position = $1
        where id = $2
        `,
    [todolist.index, todolist.id]
  );
};

Todolist.destroy = id => {
  return db.none(
    `
        delete from thingstodo
        where id = $1
        `,
    [id]
  );
};

module.exports = Todolist;
