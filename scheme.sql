DROP DATABASE IF EXISTS tasselWeb;

CREATE DATABASE IF NOT EXISTS tasselWeb;

USE tasselWeb;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users
(
    userId INTEGER AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    CONSTRAINT pk_users PRIMARY KEY (userId)
);

DROP TABLE IF EXISTS rootBookmarks;

CREATE TABLE IF NOT EXISTS rootBookmarks
(
    rootMarkId INTEGER AUTO_INCREMENT,
    url VARCHAR(128),
    title VARCHAR(256),
    userId INTEGER,
    CONSTRAINT pk_root_bookmark PRIMARY KEY (rootMarkId),
    CONSTRAINT fk_rb_user FOREIGN KEY (userId)
        REFERENCES users (userId)
);

DROP TABLE IF EXISTS branchBookmarks;

CREATE TABLE IF NOT EXISTS branchBookmarks
(
    branchMarkId INTEGER AUTO_INCREMENT,
    url VARCHAR(128),
    title VARCHAR(256),
    userId INTEGER,
    rootMarkId INTEGER,
    CONSTRAINT pk_branch_bookmark PRIMARY KEY (branchMarkId),
    CONSTRAINT fk_bb_user FOREIGN KEY (userId)
        REFERENCES users (userId),
    CONSTRAINT fk_root_bookmark FOREIGN KEY (rootMarkId)
        REFERENCES rootBookmarks (rootMarkId)
);
