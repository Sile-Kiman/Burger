DROP DATABASE IF EXISTS Burgers_db;
CREATE database  Burgers_db;

USE   Burgers_db;

CREATE TABLE burgers(
  id INT  NOT NULL AUTO_INCREMENT, -- Primary Key
  burger_name VARCHAR(50) NOT NULL, -- hold burgers name
  devour_it BOOLEAN NOT NULL, -- to verify if burger has been eaten
  PRIMARY KEY (id)
);