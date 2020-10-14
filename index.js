const inquirer = require("inquirer");
const fs = require("fs");

// require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
// const initDb = require("./config/initDb");
// const authRouter = require("./routes/auth");
// const usersRouter = require("./routes/users");
// const taskRouter = require("./routes/taskAPI");
// const errorMiddleware = require("./routes/errorMiddleware");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets in production (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(authRouter, usersRouter, taskRouter, errorMiddleware);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

// Send all other requests to react app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

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
    message: "Enter the name for your markdown file:",
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
    message: "Enter your First Name:",
    name: "firstname"
  },
  {
    type: "input",
    message: "Enter your Last Name:",
    name: "lastname"
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

async function init() {
  await PORT;
  inquirer.prompt(questions).then((answers) => {
const writeFile =
`## ${answers.title}
${answers.license}

## Description
${answers.description}

## Table of Contents    
* [Quick Start](#quick-start)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Tests](#tests)
* [Questions](#questions)  
* [License](#license)

## Quick Start
${answers.installation}

## Usage 
${answers.usage}

## Screenshots

## Tests
      
## License

Copyright 2020 - present ${answers.firstname}${answers.lastname}.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)
      


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
      console.log("Writing file...");
    });
  });
}

init();