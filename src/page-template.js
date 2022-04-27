const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');



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


module.exports = templateData => {
  // destructure page data by section
  const  employee  = templateData;
  

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
      <div class="container flex-row text-center align-center py-3">
        <h1 class="page-title text-secondary py-2 px-3">My team</h1>
      </div>
    </header>
    <main class="container my-5">
      
       
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Vardis Sartzetakis</h3>
    </footer>
  </body>
  </html>
  `;
};


// ${ generateEmployee(employee) }