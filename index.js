const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeetrackerDB',
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

// Function for viewing all employees that are in the database 
const viewEmployees = () => {
    const query = 
    'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Employee List:', res);
        runTracker();
    });
};

// Add employees 
const addEmployee = () => {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "Enter the employee's first name."
            // add validation
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter the employee's last name."
            // add validation
        },
        {
            name: "role",
            type: "list",
            message: "Select the employee's role."
            //choices: 
        },
        {
            name: "manager",
            type: "list",
            message: "Select the employee's manager."
            //choices: 
        }
    ]).then((answer) => {
        connection.query('INSERT INTO employee SET ?'
        {
            first_name, 
            last_name,
            roles_id,
            manager_id
        }) 
        VALUES (`${answer.first_name}`, `${answer.last_name}`')

    })

};

const updateEmployeeRole = () => {

};

// View roles in the database 
const viewRoles = () => {
    const query = 
    'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Role List:', res);
        runTracker();
    });
};

const addRole = () => {
inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "Enter the role title."
            // add validation
        },
        {
            name: "salary",
            type: "input",
            message: "Enter the role salary."
            // add validation
        },
        {
            name: "department",
            type: "list",
            message: "Select the role's department."
            //choices: 
        }
    ]).then((answer) => {
        
    })

};

// Change function to include console.table in response
const viewDepartments = () => {
    const query = 
    'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table('Department List:', res);
        runTracker();
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the name of the department."
            // add validation
        }
    ]).then((answer) => {
        
    })

};