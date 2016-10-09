CREATE DATABASE thePenMainDb;

USE thePenMainDb;

CREATE TABLE users (
  /* a user table */
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID),
  firstName varchar(200) NOT NULL,
  displayUrl varchar(200) NOT NULL,
  lastName varchar(200),
  primaryEmail varchar(200) NOT NULL,
  profile_photo varchar(300),
  password varchar(200) NOT NULL
);

-- CREATE TABLE matches (
--   -- a table for matches, histrical data can be added in future
--   id int NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (ID),
--   userId1 int,
--   FOREIGN KEY(userId1) REFERENCES users(id),
--   userId2 int,
--   FOREIGN KEY(userId2) REFERENCES users(id)
-- )

-- CREATE TABLE (
--   id int NOT NULL AUTO_INCREMENT,
--   PRIMARY KEY (ID),
--   locataion varchar(50) NOT NULL
-- ),