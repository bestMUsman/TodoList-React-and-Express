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
        (content)
        values
        ($1) returning *
        `,
    [todolist.content]
  );
};

Todolist.update = (todolist, id) => {
  return db.none(
    `
        update thingstodo set
        content = $1
        where id = $2
        RETURNING *
        `,
    [todolist.content, id]
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
