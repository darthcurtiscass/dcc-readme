// Importing fs, inquirer, generateMarkdown file--and the functions within it.
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for the README, that user will answer to specify the info in their README file.
const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'What is your project title?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of your application.',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Installation intructions?'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How can your applicaiton be used?'
        },
        {
          type: 'input',
          name: 'contributions',
          message: 'Provide credit to any contributers'
        },
        {
          type: 'list',
          message: 'Which license would you like to select?',
          name: 'license',
          choices: ['Apache 2.0 License','Boost Software License 1.0','Eclipse Public License 1.0', 'IBM Public License Version 1.0', 'MIT', 'Mozilla Public License 2.0', 'No License applicable']
        },
        {
          type: 'input',
          name: 'username',
          message: 'What is your github username?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        },
    ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// Uses inquirer to prompt user for questions, then it returns the answers in data, and writes those answers to a README file.
function init() {
    inquirer
        .prompt(questions)

        .then((data) => {
            fs.writeFile("readMe.md", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('README created!'));
        })
}

init();

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'Bob',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.Bob.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
