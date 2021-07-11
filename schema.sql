DROP DATABASE IF EXISTS employeetrackerDB;
CREATE DATABASE employeetrackerDB;

USE employeetrackerDB;

-- follow up for null / not null on all the below 
-- follow up on id references between tables
-- check in on roles and department name not properly working
-- check to see if drop tables if exists is needed

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name DECIMAL(10,2),
    roles_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);