CREATE DATABASE spotify;

USE spotify;

CREATE TABLE users (
  id int NOT NULL auto_increment,
  firstname varchar(50),
  lastname varchar(255),
  email varchar(255),
  password varchar(255),
  PRIMARY KEY(id)
);
