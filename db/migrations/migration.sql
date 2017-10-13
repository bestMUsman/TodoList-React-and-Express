\c todolist_development

DROP TABLE thingstodo;

CREATE TABLE IF NOT EXISTS thingstodo (
  id BIGSERIAL PRIMARY KEY,
  content VARCHAR(1024),
  checked Boolean,
  position INTEGER
);

