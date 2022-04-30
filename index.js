const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./src/generate-site.js');
const generatePage = require('./src/page-template');

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

const totalData = [];
const promptEmployee = (teamData) => {
    if (!teamData) {
        teamData = [];
      }
      console.log(`
      =================
      Add a New Employee
      =================
      `);
  return inquirer.prompt([                         // questions for a new employee
    {
        type: 'list',
        name: 'id2',
        message: 'Provide a type for the employee',
        choices: ['Engineer', 'Intern']
    },  
    {
        type: 'input',
        name: 'github',
        message: 'Please enter his/her GitHub username ',
        when: (input) => input.id2 === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school ",
        when: (input) => input.id2 === 'Intern'
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
        default: 'false'
        }
   ])
    .then(employeeData => {
      teamData.push(employeeData);    // the promise into an array
      totalData.push(employeeData);
      if (employeeData.confirmAddEmployee) {         // if user wants to add more employee (true)
        return promptEmployee(teamData);       // function with the parameter otherwise will start over
      } else {                                   
        return generatePage(totalData);                      // else return the current data
      }
    })
    .then(pageHTML => {
      
      if(pageHTML) {
        return writeFile(pageHTML);
      }
       
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
  }; 


promptManager()
    .then(answers => {totalData.push(answers);
        console.log(totalData);
    })
    .then(promptEmployee);
 