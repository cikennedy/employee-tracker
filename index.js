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
                viewEmployees();
                break;
            
            case 'Update Employee Role':
                viewEmployees();
                break; 
                
            case 'View All Roles':
                viewEmployees();
                break;  
                
            case 'Add Role':
                viewEmployees();
                break;

            case 'View All Departments':
                viewEmployees();
                break;

            case 'Add Department':
                viewEmployees();
                break;
        }
    })
}