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

DROP TABLE IF EXISTS bookmarks;

CREATE TABLE IF NOT EXISTS bookmarks
(
    markId INTEGER AUTO_INCREMENT,
    url VARCHAR(128) UNIQUE,
    title VARCHAR(256),
    userId INTEGER,
    CONSTRAINT pk_bookmarks PRIMARY KEY (markId),
    CONSTRAINT fk_bookmarks_users FOREIGN KEY (userId)
        REFERENCES users (userId)
);
