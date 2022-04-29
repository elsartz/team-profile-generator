let Employee = require('../lib/Employee');
let Manager = require('../lib/Manager');
let Engineer = require('../lib/Engineer');
let Intern = require('../lib/Intern');

const generateManager = manager => {
  const {name, id, email, officeNumber} = Manager;

  return `
        <div class="flex-row justify-space-around">
          <div class="card mb-2 mr-4">
            <div class="col-3 mb-1 bg-tertiary text-light p-3">
              <h3 class="text-light">${name}</h3>
              <i class="fas fa-mug-hot mr-3"> Manager</i>
            </div>
          <div class="bg-light text-dark p-3">
            </br>
              <p>ID: ${id}</p>
              <p>Email: ${email}</p>
              <p> Office number: ${officeNumber}</p>
            </br>
          </div>     
        </div>    
  `;
}


const generateEmployee = employeeArr => {

  // let idToSelect = 789
  // let selectedPerson
  // for (let person of peopleArray) {
  //   if (person.id === idToSelect) {
  //     selectedPerson = person;
  //     break;
  //   }
  // }

  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${employeeArr
        // .filter(({ feature }) => feature)
        .map(({ name, id, email }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            
            <p>${id}</p>
            <a href="${email}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${employeeArr
        // .filter(({ feature }) => !feature)
        .map(({ name, id, email }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            
            <p>${id}</p>
            <a href="${email}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};
let engineer = [];
let intern = [];

module.exports = templateData => {
  
  const  employee  = templateData;
  // add manager
  Manager = employee[0];
  
  for (var i=1; i<employee.length; i++) {
    if (employee[i].id2 === 'Engineer') {
        // add engineer
        Engineer = employee[i];
        engineer.push(Engineer);     
    } else {     
        // add intern
        Intern = employee[i];
        intern.push(Intern);      
    }
  }
// console.log('ENGINEERS',engineer);
// console.log('INTERNS',intern);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-center align-center py-3">
        <h1 class="page-title text-secondary py-2 px-3">My team</h1>
      </div>
    </header>
    <main class="container my-5">
      <section>
      ${generateManager(employee)}
      </section>       
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Vardis Sartzetakis</h3>
    </footer>
  </body>
  </html>
  `;
};


// ${ generateEmployee(employee) }