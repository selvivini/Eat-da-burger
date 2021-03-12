DROP DATABASE burgers_db IF EXISTS;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name  VARCHAR(60) NOT NULL ,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);