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
    
    fs.writeFile(answers.title + ".md", writeFile, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log("Success!");
    
    });
    });
  }
init();


// Add below items to table of contents
//   * Contributing user input
//   * Tests
//   * Questions