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


{
        validate: (answer) => {
            if (answer === "yes") return true;
            else if (answer === "no") {
                console.log("");
                console.log("Good bye");
                return process.exit();
            }
            else {
                console.log("");
                console.log("Please type 'yes' or 'no'!"),
                return false;
            }
        }
}