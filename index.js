const fs = require('fs')
const inquirer = require('inquirer');
//const ui = require('inquirer')

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        name : 'title',
        message : 'Enter the name of your project: ',
        validate : function(value) {
            var pass = value.match(/\w+/g)
            if ( pass ) {
                return true
            }
            return 'Project must have a name!'
        },
        
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Enter a description of the project: ',
        default : "",
        validate: function(value) {
            var pass = value.match(/\w+/g)
            if (pass) return true
            return 'Please enter a description'
        },
        filter: function(value) {
            return value.replace(/\r\n/g,"\n");
        },
    },
    {
        type: 'list',
        message: 'Technologies Used: ',
        name: 'tech',
        choices: [
                { name: '-', value:null},
                { name: 'Node', value: {"name": "Apache 2.0", "link":'https://choosealicense.com/licenses/apache-2.0/' }},
                { name: 'CSS', value: {"name": "MIT", "link":'https://spdx.org/licenses/MIT.html'}},
                { name: 'HTML',value: {"name": "GPLv3", "link":'https://spdx.org/licenses/GPL-3.0-or-later.html'}}
                
                ] 
        ,

        default:'-',

    },
    {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'installation',
        default:""

    },
    {
        type: 'input',
        message: 'Usage instructions: ',
        name: 'usage',
        default:""

    }, 
    { 
        type : 'input',
        name : 'credits',
        message : 'Enter credits/acknowedglements: ',
        default: ""

    },
    {
      type: 'list',
      message: 'Choose a license for the project',
      name: 'license',
      choices: [
            { name: 'Apache 2.0', value: {"name": "Apache 2.0", "link":'https://choosealicense.com/licenses/apache-2.0/' }},
            { name: 'MIT', value: {"name": "MIT", "link":'https://spdx.org/licenses/MIT.html'}},
            { name: 'GPLv3',value: {"name": "GPLv3", "link":'https://spdx.org/licenses/GPL-3.0-or-later.html'}},
            { name: 'No License', value: null},

      ],
    }

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName,data,'utf8');
    } catch(e) {
         console.log(e);
         throw(e);
    }
    return 
}
// TODO: Create a function to initialize app
// const writeStream = fs.createWriteStream('./utils/README.md');
function init() {}
init();
// questions
    // function(question) {
        inquirer.prompt(questions)
        .then( (answers) => {
    // new Promise(resolve => {
    //     const data = []
        // const data = answers;
        // const dest = fs.createWriteStream('./dist/README.md');

        // answers.pipe(dest);
        // answer.on('data', chunk => buffers.push(chunk));
        // dest.on('close', () => resolve(Buffer.concat(buffers).toString));
    // });
    // console.log(answers.license)
    console.log(JSON.stringify(answers,null,2))
    let data = generateMarkdown(answers)

    writeToFile('./dist/README.md',data);
    })
    .catch( (error) => {
        console.log(error);
        throw error;
    })






