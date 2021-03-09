DROP DATABASE burgers_db IF EXISTS;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name NOT NULL VARCHAR(60),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);