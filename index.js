var fs = require('fs');
const inquirer = require ('inquirer');
var gH = require("./src/generateHTML.js");
var {Employee,Manager,Engineer,Intern} = require("./lib/Employee.js");

var employees = [];

var menuQuestion = [
{
    type: 'list',
    message: 'what type of employee would you like to add?',
    name: 'choice',
    choices: ["Engineer","Intern",'Exit']
}
]


const managerQuestions = [{
    type: 'input',
    message: 'what is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'what is your employee ID?',
    name: 'employeeID',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },

  {
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNumber',
  },
  ...menuQuestion
];

const engineerQuestions = [{
    type: 'input',
    message: 'what is your employee\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'what is your employee\'s ID?',
    name: 'ID',
  },
{
  type: 'input',
  message: 'what is your employee\'s email?',
  name: 'email',
},
{
  type: 'input',
  message: 'what is your employee\'s github?',
  name: 'github',
},
...menuQuestion
  
];
const internQuestions = [{
    
    type: 'input',
    message: 'what is your employee\'s name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'what is your employee\'s ID?',
    name: 'ID',
  },
{
  type: 'input',
  message: 'what is your employee\'s email?',
  name: 'email',
},
{
  type: 'input',
  message: 'what is your employee\'s school?',
  name: 'school',
  
},
...menuQuestion
];

function makeManager(){
  inquirer
  .prompt(managerQuestions)
  .then((data) =>{
    var manager = new Manager(data.name,data.employeeID,data.email,data.officeNumber);
    employees.push(manager);
    parseChoice(data.choice);
  })
}
function makeEngineer(){
  inquirer
  .prompt(engineerQuestions)
  .then((data)=>{
    var engineer = new Engineer(data.name,data.ID,data.email,data.github);
    employees.push(engineer);
    parseChoice(data.choice);
  }
)}
function parseChoice(choice){
  if ("Engineer"===choice){
    makeEngineer();
  } else if ("Intern"===choice){
  makeIntern()}else if (
    "Exit"=== choice 
  ){
    makeHtml();  
  }
}
function makeHtml (){
  fs.writeFile("./dist/output.html",gH.generateHTML(employees),(err)=>{
    if (err){
      console.log(err);
    }
  })
}
function makeIntern(){
  inquirer
  .prompt(internQuestions)
  .then((data)=>{
    var intern = new Intern(data.name,data.ID,data.email,data.school);
    employees.push(intern);
    parseChoice(data.choice);
  })
}


makeManager();