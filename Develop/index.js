const fs = require('fs')
const inquirer = require('inquirer')
const axios = require('axios')
const util= require('util')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
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
            type:"input",
            message: "Do you want to add a Table of Contents?",
            name: "table"
        },
        {//installation
            type: "input",
            message:"Write a brief summary on how to install your app.",
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
        type: "input",
        message: "Do you want to add a license?",
        name: "license"
        }])
    }

    function generateReadMe(answers) {
        return `
# Your Project Title= ${answers.title}

## Description 
        ${answers.description}
        
## Table of Contents 
        ${answers.table}
        
        
 * [Installation](#install)
 * [Usage](#usage)
 * [Credits](#credit)
 * [License](#license)
 * [Badges](#badge)
 * [Contributers](#credit)
        
        
## Installation
        ${answers.install}
        
## Usage 
        ${answers.usage}
        
## Credits
        ${answers.credit}
        
## License
        ${answers.license}
        
## Badges
        
        ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
        
        
## Contributing
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
   
        //     const queryUrl = `https:api.github.com/users/${username}`
        

// The generated README includes a bio image from the .


// The generated README includes the following sections:

// Table of Contents
// Installation
// License
// Tests
// The generated README includes 1 badge that's specific to the repository.
// /github/watchers/*USERNAME*/*REPONAME* <--badge

// MIT License
// Copyright (c) [year] [fullname]

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.