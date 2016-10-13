-- current update
USE thePenMainDb;

-- ALTER TABLE users Change firstName displayName varchar(200);
-- ALTER TABLE users DROP COLUMN lastName;


CREATE TABLE pages(
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  slug varchar(50) NOT NULL,
  displayUrl varchar(200) NOT NULL,
  FOREIGN KEY(displayUrl) REFERENCES authors(displayUrl),
  pageData JSON DEFAULT NULL
);

-- ALTER TABLE userSessions DROP COLUMN primaryEmail;
-- ALTER TABLE userSessions ADD COLUMN userId int NOT NULL;
-- ALTER TABLE users ADD COLUMN displayName varchar(200) NOT NULL;

-- example update

-- ALTER TABLE users ADD profile_photo varchar(300);
-- ALTER TABLE users DROP COLUMN social;

-- ALTER TABLE users DROP COLUMN social_investment;

-- ALTER TABLE users ADD social int DEFAULT 5;

-- CREATE TABLE tablename (
--   /* stores the current stocks for all users */
--   PRIMARY KEY (ID)
-- );