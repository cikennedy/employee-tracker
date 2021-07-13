USE employeetrackerDB;

INSERT INTO department (name)
VALUES ("Accounting"), 
("Human Resources"), 
("Sales"), 
("Administrative"), 
("IT"), 
("Legal");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Abraham', 'Lincoln', 1, 20), 
('George', 'Washington', 5, 40), 
('John F.', 'Kennedy', 3, 20),
('Theodore', 'Roosevelt', 2, 10),
('Thomas', 'Jefferson', 4, 30);

INSERT INTO role (title, salary, department_id)
VALUES ('President', 450000, 1), 
('Executive Assistant', 50000, 5), 
('CTO', 300000, 3),
('Inside Sales', 75000, 2),
('Lawyer', 200000, 4);



