const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
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
  {
    type: "input",
    message: "Give instructions for contributing:",
    name: "contributing"
  },
  {
    type: "list",
    message: "Which is your preferred license?",
    name: "license",
    choices: [
      "Mozilla",
      "MIT",
      "Artistic",
      "None"
    ]
  },
  {
    type: "input",
    message: "Enter your Github username:",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your primary email:",
    name: "email",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    const writeFile =
      `## ${answers.title}

## Description
${answers.description}

## Table of Contents    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
      
## Installation
${answers.installation}

## Usage 
${answers.usage}
      
## License
      
## Badges

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
      
## Contributing

## Tests

## Questions
For more information visit [http://www.github.com/${answers.github}]. You may contact ${answers.email} with any questions or suggestions you may have. Thank you for your interest!`;

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