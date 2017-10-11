const db = require("../db/config");

const Todolist = {};

Todolist.findAll = () => {
  return db.query("SELECT * FROM thingstodo ORDER BY id DESC");
};

Todolist.findById = (id) => {
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
        (content, checked)
        values
        ($1, $2) returning *
        `,
    [todolist.content, 'false']
  );
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
