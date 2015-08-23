drop database if exists tasselUsers;

create database if not exists tasselUsers;

use tasselUsers;

drop table if exists users;

create table if not exists users(
       userId integer primary key auto_increment,
       username varchar(100) unique,
       password varchar(100)
    )engine=innodb;
