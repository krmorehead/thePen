CREATE DATABASE thePenMainDb;

USE thePenMainDb;

CREATE TABLE authors (
  /* a user table */
  displayName varchar(200) NOT NULL,
  displayUrl varchar(200) NOT NULL,
  PRIMARY KEY (displayUrl),
  primaryEmail varchar(200) NOT NULL,
  profile_photo varchar(300),
  password varchar(200) NOT NULL
);

CREATE TABLE pages(
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  slug varchar(50) NOT NULL,
  displayUrl varchar(200) NOT NULL,
  FOREIGN KEY(displayUrl) REFERENCES authors(displayUrl),
  pageData JSON DEFAULT NULL
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
