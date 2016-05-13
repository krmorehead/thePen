CREATE DATABASE coupleFriendsSessions;

USE coupleFriendsSessions;

CREATE TABLE userSessions (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID),
  primaryEmail varchar(200),
  lastLocation varchar(200),
  ts timestamp
);