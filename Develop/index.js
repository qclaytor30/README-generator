
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
const axios = require ("axios");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please type your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please type the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "licence",
        message: "Please write the project licence"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link?"
    }
];

inquirer
    .prompt(questions)
    .then(function (data) {
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function (res) {

            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            fs.writeFile("README.md", generate(data, githubInfo), function (err) {
                if (err) {
                    throw err;
                };

                console.log("New README file created with success!");
            });
        });

    });
function init() {
}
init();
