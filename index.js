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
            message: 'Enter his/her email address: ',
            // I borrow this function :(
            default: () => {},
              validate: function (email) {
      
                  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      
                  if (valid) {
                      return true;
                  } else {
                      console.log(" Please enter a valid email")
                      return false;
                  }
              }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team's Manager office number"            
        }
    ]);
}

const promptEmployee = (teamData) => {
    
      console.log(`
      =================
      Add a New Employee
      =================
      `);
  return inquirer.prompt([                         // questions for a new project
    {
        type: 'list',
        name: 'id2',
        message: 'Provide a type for the employee',
        choices: ['Engineer', 'Intern'],
        // when: ({id2}) => {
        //     if (id2 === 'Engineer') {
        //         console.log('engineer')
        //     } else {
        //         console.log('intern')
        //     }
        // }
    },  
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your employee? (Required)',
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
      message: 'Provide an ID for the employee (Required)',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
                console.log('Please enter a valid ID!');
            return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter his/her email address: ',
        // I borrow this function :(
        default: () => {},
          validate: function (email) {
  
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
              if (valid) {
                  return true;
              } else {
                  console.log(" Please enter a valid email")
                  return false;
              }
          }
        },
        {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
        }
   ])
    .then(employeeData => {
      teamData.push(employeeData);    // the promise into an array
      if (employeeData.confirmAddEmployee) {         // if user wants to add more employee (true)
        return promptEmployee(teamData);       // function with the parameter otherwise will
      } else {                                     //   start over
        return teamData;                      // else return the current data
      }
    })
  }; 

const teamData = [];
promptManager()
    .then(answers => teamData.push(answers))
    .then(promptEmployee)