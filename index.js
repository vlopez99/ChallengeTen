const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
let employees = []

function createManager() {
    inquirer
        .prompt(
            {
                type: 'input',
                message: "What is your name?",
                name: 'manager_name',
            },
            {
                type:  'input',
                message: "What is your Email address?",
                name: 'manager_email',
            },
            {
                type:  'input',
                message: "What is your ID number?",
                name: 'manager_id',
            },
            {
                type: 'input',
                message: "What is your office number?",
                name: 'manager_office',
            },      
            {
                type: 'input',
                message: 'Would you like to add a team member? (Type "yes" or "no"!)',
                name: 'manager_team',
            },      
        )
}

fucntion generateHTML(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    ${employees.map(generateCard)}
</body>
</html>`
};

function generateCard(employees) {
    const { name, id, email} = employees
    let specificContent = ''
    if (employees instanceof Intern) {
        specificContent = `
        <h6 class="card-subtitle mh-2 text-muted">${employees.school}</h6>
        `
    }
}
