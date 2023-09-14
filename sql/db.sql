create database idcarddb;

use idcarddb;

create table st_cardtb
(
    sid      int       not null auto_increment primary key,
    uid      int(11),
    idnumber varchar(50),
    title    varchar(250),
    subject varchar(250),
    vdate    date,
    month varchar(25),
    status   varchar(50),
    dor      timestamp not null
);

create table user_account
(
    uid      int       not null auto_increment primary key,
    username varchar(50),
    name     varchar(255),
    email    varchar(250),
    password varchar(50),
    role varchar(50),
    dor      timestamp not null
);

create table student_account
(
    stid     int       not null auto_increment primary key,
    fullname varchar(250),
    program  varchar(350),
    klass    varchar(50),
    idnumber varchar(50),
    contact  varchar(50),
    picture  varchar(350),
    status   varchar(25),
    dor      timestamp not null
);

create table company
(
    cid           int       not null auto_increment primary key,
    company_name  varchar(250),
    company_email varchar(250),
    company_logo  varchar(250),
    dor           timestamp not null
);

create table program
(
    pid          int       not null auto_increment primary key,
    program_name varchar(250),
    dor          timestamp not null
);

create table klass
(
    kid        int       not null auto_increment primary key,
    pid        int,
    klass_name varchar(250),
    dor        timestamp not null
);

create table subjecttb (sbj int not null auto_increment primary key, code varchar(50), subject varchar(200), program int(10), dor timestamp not null);

create table teachertb (tid int not null auto_increment primary key, teacher varchar(150), dor timestamp not null);