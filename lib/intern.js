{
    type: 'input',
    message: "What is your name?",
    name: 'intern_name',
},
{
    type:  'input',
    message: "What is your ID number?",
    name: 'intern_id',
},      
{
    type:  'input',
    message: "What is your Email address?",
    name: 'intern_email',
},
{
    type: 'input',
    message: "What school do you currently attend?",
    name: 'intern_school',
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