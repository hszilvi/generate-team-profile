const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//! TODO: Write Code to gather information about the development team members, and render the HTML file.
const allEmployees = []
// asking for manager  data
function promptBasicEmployee() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please give the name of the manager: ',
            validate: nameUserInput => {
                if (nameUserInput) {
                    return true;
                } else{
                    console.log(`
                    You have to type a name!`)
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                const validRegex = /^[0-9]*$/;
                if (idUserInput.match(validRegex) && idUserInput) {
                    return true;
                } else {
                    console.log(`
                    Id should be a number!`)
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please give the email address of the employee: ',
            validate: emailUserInput => {
                const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (emailUserInput.match(validRegex)) {
                        return true;
                } else {
                    console.log(`
                    You need to add a valid email address!`);
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Give manager office number: ',
            validate: contactNumber => {
                const validRegex = /^[0-9]*$/;
                if (contactNumber.length <=10 && contactNumber.length >= 6 && contactNumber.match(validRegex)) {
                    return true;
                } else {
                    console.log(`
                    Add a contactnumber, number length has to be between 6-10!`)
                }
            }
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        const manager = new Manager (
            this.name = answers.name,
            this.id = parseInt(answers.id),
            this.email = answers.email,
            this.officeNumber =  parseInt(answers.officeNumber)
        )
        allEmployees.push(manager)
        if (manager) {
            promptTeamOptions()
        }
    })
    
}
// once manager is created call team member options and collect data till team building is finished
function promptTeamOptions() {
    const teamQuestions = [
        {
            name: 'options',
            type: 'list',
            message: "Choose a team member: ",
            choices: ['Engineer', 'Intern', 'Finish building the team'],
            validate: (options) => {
                if (options.length) {
                    return true;                  
                } else {
                    console.log(`
                    Choose one option!`);
                }
            }
        },
    ]
    inquirer.prompt(teamQuestions).then((answers) => {
        if (answers.options === "Engineer") {
            promptEngineer();
        } else if (answers.options === "Intern") {
            promptIntern();
        } else {
            console.log('My team is ready!');
            writeToFile();
        }
    })
}
function promptEngineer() {
    const engineerQuestion = [
        {
            type: 'input',
            name: 'name',
            message: 'Please give the name of the engineer: ',
            validate: nameUserInput => {
                if (nameUserInput) {
                    return true;
                } else{
                    console.log(`
                    You have to type a name!`)
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                const validRegex = /^[0-9]*$/;
                if (idUserInput.match(validRegex) && idUserInput) {
                    return true;
                } else {
                    console.log(`
                    Id should be a number!`)
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please give the email address of the employee: ',
            validate: emailUserInput => {
                const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (emailUserInput.match(validRegex)) {
                        return true;
                } else {
                    console.log(`
                    You need to add a valid email address!`);
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: "Give engineer's github id: ",
            validate: githubAcc => {
                if (githubAcc) {
                    return true;
                } else {
                    console.log(`
                    Please add github account name!`)
                }
            }
        }
    ];
    inquirer.prompt(engineerQuestion).then((answers) => {
        const engineer = new Engineer (
            this.name = answers.name,
            this.id = parseInt(answers.id),
            this.email = answers.email,
            this.github = answers.github
        )
        allEmployees.push(engineer);
        reRenderQuestions();
    })
};
function promptIntern() {
    const internQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please give the name of the intern: ',
            validate: nameUserInput => {
                if (nameUserInput) {
                    return true;
                } else{
                    console.log(`
                    You have to type a name!`)
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                const validRegex = /^[0-9]*$/;
                if (idUserInput.match(validRegex) && idUserInput) {
                    return true;
                } else {
                    console.log(`
                    Id should be a number!`)
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please give the email address of the employee: ',
            validate: emailUserInput => {
                const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (emailUserInput.match(validRegex)) {
                        return true;
                } else {
                    console.log(`
                    You need to add a valid email address!`);
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: "Give intern's school: ",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else{
                    console.log(`
                    Please add school name!`)
                }
            }
        }
    ];
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern (
            this.name = answers.name,
            this.id = parseInt(answers.id),
            this.email = answers.email,
            this.school = answers.school
        )
        allEmployees.push(intern);
        reRenderQuestions();
    })
}

promptBasicEmployee();

// need a function to renerate the questions till the answe is Finish building the team
function reRenderQuestions() {
    promptTeamOptions()
}
// write data to file
function writeToFile() {
    fs.writeFileSync(outputPath, render(allEmployees), "utf-8")    
}
