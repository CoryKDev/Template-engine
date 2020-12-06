const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = []

const TeamMembers = function(name, profession, id, email, github) {
    this.name = name,
    this.profession = profession,
    this.id = id,
    this.email = email,
    this.github = github
}
 const questions = [
    {
        type: 'input',
        message: 'Enter employee name',
        name: 'name'
    },
    {
        type: 'list',
        message: 'What is their role?',
        name: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
 ]
 const managerQs = [
    {
        type: 'input',
        message: 'Enter employee name',
        name: 'name'
    },
 ]
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
.prompt(questions)
.then(member => employee(member))
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
team.push(TeamMembers)
render(team)
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
fs.writeFileSync(',/output/team.html', team, err => err ? console.error(err) : console.log('yo'))
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```