// TODO: Include packages needed for this application
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
