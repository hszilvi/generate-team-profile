const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const allEmployees = []
// asking for employee data
function promptBasicEmployee() {
    const questions = [
        {
            name: 'options',
            type: 'list',
            message: "Choose employee's positon: ",
            choices: ['Manager', 'Engineer', 'Intern', 'Finish building the team'],
            validate: (options) => {
                if (options.length) {
                    return true;                  
                } else {
                    console.log('Choose one option!');
                }
            }
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        if (answers.options === "Manager") {
            promptManager();
        } else if (answers.options === "Engineer") {
            promptEngineer();
        } else if (answers.options === "Intern") {
            promptIntern();
        } else {
            console.log('team is ready');
            writeToFile();
        }
    })
}

function promptManager() {
    const managerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please give the name of the manager: ',
            validate: nameUserInput => {
                if (nameUserInput) {
                    return true;
                } else{
                    console.log('You have to type a name!')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                const validRegex = /^[0-9]*$/;
                if (idUserInput.match(validRegex)) {
                    return true;
                } else {
                    console.log('Id should be a number')
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
                    console.log('You need to add the email address of the employee!');
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
                    console.log('Add a contactnumber, number length has to be between 6-10!')
                }
            }
        }
    ]
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager (
            this.name = answers.name,
            this.id = parseInt(answers.id),
            this.email = answers.email,
            this.officeNumber =  parseInt(answers.officeNumber)
    )
    allEmployees.push(manager);
    console.log(allEmployees);
    reRenderQuestions()
    })


};
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
                    console.log('You have to type a name!')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                if (idUserInput) {
                    return true;
                } else {
                    console.log('I need the id of the employee!')
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
                    console.log('You need to add the email address of the employee!');
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
                    console.log('Please add github accoun name!')

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
        console.log(allEmployees);
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
                    console.log('You have to type a name!')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please give the id of the employee: ',
            validate: idUserInput => {
                if (idUserInput) {
                    return true;
                } else {
                    console.log('I need the id of the employee!')
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
                    console.log('You need to add the email address of the employee!');
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
                    console.log('Please add school name!')
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
        // console.log(allEmployees);
        console.log(intern)
        reRenderQuestions();
    })
}

promptBasicEmployee();

// need a function to renerate the questions till the answe is Finish building the team
function reRenderQuestions() {
    promptBasicEmployee()
}


function writeToFile() {
    fs.writeFileSync(outputPath, render(allEmployees), "utf-8")

    
}
// fs.writeFileSync(outputPath, render(allEmployees), (err) => {
//     if (err) {
//         console.log('error in writing file');
//     } else {
//         console.log('success');
//     }
// });