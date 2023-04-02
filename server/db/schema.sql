DROP DATABASE IF EXISTS eidendale;
CREATE DATABASE eidendale;

USE eidendale;

DROP TABLE IF EXISTS `login`;
CREATE TABLE login (
  id INTEGER AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);