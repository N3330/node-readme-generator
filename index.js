// TODO: Include packages needed for this application
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is the name of your project?",
        validate: function(answer) {
            if (answer !== "") {
                return true;
            }
            return "please enter a title"
        }
    },
    {
        type:"list",
        name:"license",
        message:"please select a software license",
        choices: ["MIT", "Apache 2.0", "Bsd 3.0"]
    },
    {
        type: "input",
        name:"description",
        message: "please describe your project",
        default: "No description"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project",
        default: "no installation"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this project meant to be used?",
        default: "useless"
    },
    {
        type: "input",
        name: "contributions",
        message: "How can a user submit a contribution",
        default: "No contributions accepted"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter a GitHub username",
        validate: function(answer) {
            if (answer !== "") {
                return true;
            }
            return "please enter your GitHub username"
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
        validate: function(answer) {
            if (answer !== "") {
                return true;
            }
            return "please enter your email"
        }
    },
    {
        type: "input",
        name: "tests",
        message: "what command to execute tests on project?"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "/example/", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {writeToFile("README.md", generateMarkdown(answers))});
};

// Function call to initialize app
init();
