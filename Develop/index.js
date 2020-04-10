const fs = require('fs')
const inquirer = require('inquirer')
const axios = require('axios')
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer
        .prompt([
            {//user's GitHub profile
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {//repo name
                type: "input",
                message: "What is the name of the repo?",
                name: "repo"
            },
            {// Title
                type: "input",
                message: "What would you like for the title?",
                name: "title"
            },
            {//Description
                type: "input",
                message: "Please put a description about your project.",
                name: "description"
            },
            {//table of contents
                type: "checkbox",
                message: "What do you want to add for a Table of Contents?",
                choices: ["* [Installation](#installation)", "* [Usage](#usage)", "* [Credits](#credit)", "* [License](#license)"],
                name: "table"
            },
            {//installation
                type: "input",
                message: "Write a brief summary on how to install your app.",
                name: "install"
            },
            {//Usage
                type: "input",
                message: "Please write how you would use your app.",
                name: "usage"
            },
            {// Contributing
                type: "input",
                message: "Any collaborators you would like to acknowledge?",
                name: "credit"
            },
            {
                type: "list",
                message: "Pick which license you want to add?",
                choices: ["MIT License", " GNU GENERAL PUBLIC LICENSE", "Mozilla Public License Version 2.0"],
                name: "license"
            },
            {
                type: "input",
                message: "What message do you want for your badge?",
                name: "badge"
            }
                

            ])

}


function generateReadMe(answers) {
    // const image =  `https://api.github.com/users/${answers.username}/response/avatar_url`

    return `
# Made by ${answers.username} 

## ${answers.repo}

# ${answers.title}

## Description 
${answers.description}
        
## Table of Contents 
${answers.table[0]} \n
${answers.table[1]} \n
${answers.table[2]} \n
${answers.table[3]} \n
${answers.table[4]} \n
        
## Installation
${answers.install}
        
## Usage 
${answers.usage}
        
## Credits
${answers.credit}
        
## License
${answers.license}
        
## Badges
        
<img src= "https://img.shields.io/static/v1?label=MadeWithLove&message=${answers.badge}&color=red" alt="badge" style="border-radius:50px" width ="150px"/>
        
        
## Contributing
${answers.credit}       
`

}

promptUser()

.then(function(answers) {
    const txt = generateReadMe(answers);

    return writeFileAsync("test.md", txt);
  })
  .then(function() {
    console.log("Successfully wrote to test.md");
  })
  .catch(function(err) {
    console.log(err);
  });
// async function init() {
//     try {
//         const answers = await promptUser()
//             .then(function ({ username }) {
//                 const queryUrl = `https://api.github.com/users/${username}`;

//                 await axios.get(queryUrl).then(function (res) {
//                     const avatar_url = res.avatar_url
//                     return avatar_url
//                 })
//             })

//                 .then(function (answers) {
//                     const txt = generateReadMe(answers);

//                     return writeFileAsync("test.md", avatar_url, txt);
//                 })
//                 .then(function () {
//                     console.log("Successfully wrote to test.md");
//                 })
//             } catch(err) {
//                     console.log(err);
//                 }
// }
 
//  init()
 
 
// ![avatar image](${avatar_url})