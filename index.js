const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
     type: "input",
     message: "What is the title of your application?",
     name: "title",   
    },
    {
    type: "input",
    message: "Please provide a description of the application.",
    name: "description",   
    },
    {
    type: "input",
    message: "Please provide installation requirements.",
    name: "install",
    },
    {
    type: "input",
    message: "Please provide instructions for using the application.",
    name: "usage",
    },
    {
    type: "input",
    message: "Please list your collaborators and any other third parties to pay credit to.",
    name: "credits",
    },
    {
    type: "list",
    message: "Which license would you like to use?",
    choices: ["Apache", "GNU", "MIT", "BSD2", "BSD3", "Boost", "Creative Commons", "Eclipse", "GNU Affero", "GNU General", "GNU Lesser", "Mozilla", "Unlicense"],
    name: "license",   
    },
    {
    type: "input",
    message: "Please enter your Github username.",
    name: "github",
    },
    {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
    },
    

])

.then ((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile("./utils/examplereadme.md", readmeContent, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated.")
    });
});




// TODO: Create a function to initialize app
//
