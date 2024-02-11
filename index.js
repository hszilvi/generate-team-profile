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
// asking for employee data
function promptBasicEmployee() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Please give the name of the Employee: ',
            validate: nameUserInput => {
                if (nameUserInput) {
                    return true;
                } else{
                    console.log('You have to type a name!')
                }
            }
        },
        // {
        //     type: 'input',
        //     name: 'id',
        //     message: 'Please give the id of the employee: ',
        //     validate: idUserInput => {
        //         if (idUserInput) {
        //             return true;
        //         } else {
        //             console.log('I need the id of the employee!')
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'Please give the email address of the employee: ',
        //     validate: emailUserInput => {
        //         if (emailUserInput) {
        //             return true;
        //         } else {
        //             console.log('You need to add the email address of the employee!')
        //         }
        //     }
        // },
        {
            name: 'options',
            type: 'list',
            message: "Choose employee's positon: ",
            choices: ['Manager', 'Engineer', 'Intern'],
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
        } else {
            promptIntern();
        }
    })
}

function promptManager() {
    const managerQuestions = [
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Give manager office number: ',
            validate: contactNumber => {
                if (contactNumber.length <=10 && contactNumber.length >= 6) {

                    return true;
                } else {
                    console.log('Add a contactnumber, number length has to be between 6-10!')
                }
            }
        }
    ]
    inquirer.prompt(managerQuestions).then((answers) => {
    //     const manager = new Mangager(answers.)
    })


};
function promptEngineer() {
    const engineerQuestion = [
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
        console.log('engineer ' + answers.github);
    })
};
function promptIntern() {
    const internQuestions = [
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
        console.log('it is an intern')
    })
}

promptBasicEmployee();
function generateManager() {
    console.log('its a manager');
}

    // function multipleChoice() {
    //     const questions = [
    //       {
    //         name: "options",
    //         type: "list",
    //         message: "Which option?",
    //         choices: ["Option 1", "Option 2", "Option 3"],
    //       },
    //     ];
    //     inquirer.prompt(questions).then((answers) => {
    //       if (answers.options === "Option 1") {
    //         one();
    //       } else if ((answers.options = "Option 2")) {
    //         two();
    //       } else if ((answers.options = "Option 3")) {
    //         three();
    //       }
    //     });
    //   }
    //   function one() {}
      
    //   function two() {}
      
    //   function three() {}
      
    //   multipleChoice();

