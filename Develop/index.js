// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
const fs = recquire('fs')
const inquirer = recquire('inquirer')
const axios = recquire('axios')

inquirer
.prompt({//user's GitHub profile
    type: input,
    message: "What is your GitHub username?",
    name: "username"
},
{// The generated README includes the user's email.
    type: input,
    message: "What is your email?",
    name: "email"
},
{// Title
    type: input,
    message: "What would you like for the title?",
    name:"title"
},
{//repo name
    type: input,
    message: "What is the name of the repo?",
    name: "repo"
},
{//Description
    type: input,
    message: "Please put a description about your project.",
    name: "description"
},
{//Usage
    type:input,
    message:"Please write how you would use your app.",
    name: "usage"
},
{// Contributing
    type: input,
    message:"Any collaborators you would like to acknowledge?",
    name: "credit"
}).then(function({username, email, title,repo,description,usage,credit}){
    const queryUrl= `https:api.github.com/users/${username}`
    const email= res.data.email
    const title= res.data.title
    const repo= res.data.repo



})

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