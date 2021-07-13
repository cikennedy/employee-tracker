const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Password123',
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
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw err;
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
            message: "Select the employee's role.",
            // function to provide the array and then list of the employee roles 
            choices: function() {
                var roleArr = [];
                for (let i = 0; i < res.length; i++) {
                    roleArr.push(res[i].title);
                }
                return roleArr;
            }
        },
        {
            name: "manager",
            type: "input",
            message: "If the employee has a manager, enter the manager id."
        }
    ]).then((answer) => {
        let role_id;
        for (let j = 0; j < res.length; j++) {
            if (res[j].title == answer.role) {
                role_id = res[j].id;
                console.log(role_id)
            }
        }
        connection.query('INSERT INTO employee SET ?',
        {
            first_name: answer.first_name, 
            last_name: answer.last_name,
            role_id: role_id,
            manager_id: answer.manager_id
        },
        function (err) {
            if (err) throw err;
            console.log("Employee Successfully added");
            runTracker();
        })
    })
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
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
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
            message: "Select the role's department.",
            // function to provide the array and then list of the employee roles 
            choices: function() {
                var departmentArr = [];
                for (let i = 0; i < res.length; i++) {
                    departmentArr.push(res[i].name);
                }
                return departmentArr;
            }
        }
    ]).then((answer) => {
        let department_id;
        for (let j = 0; j < res.length; j++) {
            if (res[j].name == answer.department) {
                department_id = res[j].id;
            }
        }
        connection.query('INSERT INTO role SET ?',
        {
            title: answer.title, 
            salary: answer.salary,
            department_id: department_id,
        },
        function (err) {
            if (err) throw err;
            console.log("Role Successfully added");
            runTracker();
        })
        
    })
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