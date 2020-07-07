const inquirer = require("inquirer");
const fs = require("fs");

const licenses = [
  {
    name: "Mozilla",
    url: "https://opensource.org/licenses/MPL-2.0",
    shield: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",
  },
   {
    name: "MIT",
    url: "https://opensource.org/licenses/MIT",
    shield: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
  },
  {
    name: "Artistic",
    url: "https://opensource.org/licenses/Artistic-2.0",
    shield: "![Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)",
  },
]

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
    type: "list",
    message: "Which of the following is your preferred license?",
    name: "license",
    choices: licenses.map((license) => license.name),
  },
  {
    type: "input",
    message: "Describe the process for contributing:",
    name: "contributing"
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
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)  

## Installation
${answers.installation}

## Usage 
${answers.usage}
      
## License

This project is licensed under the chosen license.
      
## Badges

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
      
## Contributing

## Tests

## Questions
For repository and more information visit [Github](http://www.github.com/${answers.github}). You may contact us via [E-mail](mailto:${answers.email}) with questions or suggestions. Thank you for your interest!`;

    fs.writeFile(answers.title + ".md", writeFile, (error) => {
      if (error) {
        return console.log(error);
      }
      // fs.appendFile(answers.title + ".md", writeFile, (lisence));
      console.log("Success!");
    });
  });
}

init();