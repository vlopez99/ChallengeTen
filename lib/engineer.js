        {
            type:  'input',
            message: "What is your ID number?",
            name: 'engineer_id',
        },      
        {
            type:  'input',
            message: "What is your Email address?",
            name: 'engineer_email',
        },
        {
            type: 'input',
            message: "What is your Github username?",
            name: 'engineer_git',
        },
        {
            type: 'input',
            message: "What is your name?",
            name: 'engineer_name',
        },
        {
            type: 'input',
            message: 'Woulkd you like to add another employee? (Type "yes" or "no"!)',
            name: 'new_engineer',
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