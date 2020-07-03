const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "Enter your name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the title of your project:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Provide a step-by-step description of installation and required packages:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use:",
    name: "usage",
  },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const writeFile = `
      ## ${answers.title}

      ## Description
      ${answers.description}

      ## Table of Contents    
      * [Installation](#installation)
      * [Usage](#usage)
      * [Credits](#credits)
      * [License](#license)
      
      ## Installation
      ${answers.installation}

      ## Usage 
      ${answers.usage}

      ## Credits
      
      ## License
      
      ## Badges
      
      ## Contributing
      
      `;
    // writeFile("./" + answers.title + ".md", writeFile);
    fs.writeFile(answers.title + ".md", writeFile, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("Success!");
    
    });
    });
  }
// function call to initialize program
init();


  // Dynamic MD

//   * Title user input
//   * Description user input
//   * Table of Contents generate
//   * Installation user input
//   * Usage user input
//   * License choose 1
//   * Contributing user input
//   * Tests
//   * Questions