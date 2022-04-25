const inquirer = require('inquirer');


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team's Manager name",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                    console.log('Please enter a valid name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team's Manager employee ID",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                    console.log('Please enter a valid number');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team's Manager email",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                    console.log('Please enter a valid email');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team's Manager office number"            
        }
    ])
}
promptManager()
    // .then(promptEmployee)
    .then(answers => console.log(answers));