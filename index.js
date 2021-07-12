const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: '',
});

connection.connect((err) => {
    if (err) throw err;
    runTracker();
});

// inquirer prompt for the minimum for the assignment for now
// Bonus point choices are commented out below
const runTracker = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            // 'View All Employees By Department',
            // 'View All Employees By Manager',
            'Add Employee',
            // 'Remove Employee',
            'Update Employee Role',
            // 'Update Employee Manager',
            'View All Roles',
            'Add Role',
            // 'Delete Role',
            'View All Departments',
            'Add Department',
            // 'Delete Department',
            // 'View Department Budgets',
        ]
    })
    .then((answer) => {
        switch(answer.action) {
            case 'View All Employees':
                viewEmployees();
                break;

            case 'Add Employee':
                addEmployee();
                break;
            
            case 'Update Employee Role':
                updateEmployeeRole();
                break; 
                
            case 'View All Roles':
                viewRoles();
                break;  
                
            case 'Add Role':
                addRole();
                break;

            case 'View All Departments':
                viewDepartments();
                break;

            case 'Add Department':
                addDepartment();
                break;
        }
    })
};

// Function for viewing all employees. Check that all SQL terminology is correct
const viewEmployees = () => {
    const query = 
    'SELECT first_name last_name FROM employee';
    connection.query(query, (err, res) => {
        res.forEach(({ first_name, last_name }) => console.log(first_name, last_name));
        runSearch();
    });
};

const addEmployee = () => {

};

const updateEmployeeRole = () => {

};

const viewRoles = () => {
    const query = 
    'SELECT title FROM roles';
    connection.query(query, (err, res) => {
        res.forEach(({ title }) => console.log(title));
        runSearch();
    });
};

const addRole = () => {

};

const viewDepartments = () => {
    const query = 
    'SELECT department_name FROM department';
    connection.query(query, (err, res) => {
        res.forEach(({ department_name }) => console.log(department_name));
        runSearch();
    });
};

const addDepartment = () => {

};