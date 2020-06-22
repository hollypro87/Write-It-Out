-- Drops the write it out if it exists currently --
DROP DATABASE IF EXISTS write_it_out;
-- Creates the "write it out" database --
CREATE DATABASE write_it_out;
USE write_it_out;
CREATE TABLE Posts (
id INTEGER NOT NULL auto_increment ,
title VARCHAR(255) NOT NULL, 
body TEXT NOT NULL,
category VARCHAR(255) NOT NULL,
createdAt DATETIME NOT NULL,
updatedAt DATETIME NOT NULL, 
PRIMARY KEY (id)
);

