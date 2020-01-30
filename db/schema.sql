DROP DATABASE IF EXISTS Burgers_db;
CREATE database  Burgers_db;

USE   Burgers_db;

CREATE TABLE burgers(
  id INT  NOT NULL AUTO_INCREMENT, -- Primary Key
  burger_name VARCHAR(50) NOT NULL, -- hold burgers name
  devour_it BOOLEAN NOT NULL, -- to verify if burger has been eaten
  PRIMARY KEY (id),
);
--Heroku database

DROP DATABASE IF EXISTS xcefsehz87cn9usg;
CREATE database  xcefsehz87cn9usg;

USE   xcefsehz87cn9usg;

CREATE TABLE burgers(
  id INT  NOT NULL AUTO_INCREMENT, -- Primary Key
  burger_name VARCHAR(50) NOT NULL, -- hold burgers name
  devour_it BOOLEAN NOT NULL, -- to verify if burger has been eaten
  createAt timestamp NOT NULL default current_timestamp, 
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO  burgers (burger_name, devour_it)
VALUES ("Cheese Burger with bacon", False);

INSERT INTO  burgers (burger_name, devour_it)
VALUES ("Grilled Ckicken with Mayo", False);

INSERT INTO  burgers (burger_name, devour_it)
VALUES ("BLT burger", True);

USE xcefsehz87cn9usg;
SELECT * FROM burgers