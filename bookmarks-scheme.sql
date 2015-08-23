drop database if exists tasselBookmarks;

create database if not exists tasselBookmarks;

use tasselBookmarks;

drop table if exists bookmarks;

create table if not exists bookmarks(
       markId integer primary key auto_increment,
       url varchar(128) unique,
       title varchar(256)
    )engine=innodb;
