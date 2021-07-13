DROP DATABASE IF EXISTS employeetrackerDB;
CREATE DATABASE employeetrackerDB;

USE employeetrackerDB;

-- follow up for null / not null on all the below 
-- follow up on id references between tables
-- check in on roles and department name not properly working
-- check to see if drop tables if exists is needed

-- Creates table for department with relevant fields 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Creates table for role with relevant fields 
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

-- Creates table for employee with relevant fields 
DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name DECIMAL(10,2) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);