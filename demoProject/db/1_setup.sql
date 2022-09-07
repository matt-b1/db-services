DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  age int NOT NULL
);
