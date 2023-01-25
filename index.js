
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const makeHTML = require('./src/makeHTML');
const Engineer = require('./lib/engineer');
const Inter = require('./lib/intern');

const team = [];

const addManager =() =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manger?',
            validate: nameInput => {
                if(nameInput){
                    return true
                }
                else{
                    console.log("Please enter manager name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID',
            validate: nameInput =>{
                if(isNaN(nameInput)){
                    console.log("Enter the ID")
                }
                else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email',
            validate: email =>{
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(email){
                    return true;
                }
                else{
                    console.log("Please enter an email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the office number",
            valide: nameInput => {
                if(isNaN(nameInput)){
                    console.log('Enter office numer')
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    ])
    .then(data =>{
        const {name, id, email, officeNumber } = data;
        const manager = new Manager (name,id,email,officeNumber);

        team.push(manager)
        console.log(manager);
    })
};

const addEmployee =() =>{
    console.log('Adding employee to the team');
    console.log('=============================');
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter name",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("Enter name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter ID',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("Enter ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email',
            validate: email =>{
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid){
                    return true;
                }
                else{
                    console.log("enter Email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter github username',
            when: (input)=>input.role === "Engineer",
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("failed Enter github username");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name',
            when(input){input.role === "Intern"},
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("Enter school name");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(data =>{
            let { name,id,email,role,github,school,confirm } = data;
            let employee;

            if(role === "Engineer"){
                employee = new Engineer(name,id,email,github);
                console.log(employee);
            }
            else if(role === "Intern"){
                employee = new Intern(name,id,email,school);
                console.log(employee);
            }
            if(confirm){
                return addEmployee(team);
            }
            else{
                return team;
            }
    })
};

const writeFile = data =>{
    fs.writeFile('./dist/index.html',data,err =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Team profile created");
        }
    })
}

addManager()
    .then(addEmployee)
    .then(team =>{
        return makeHTML(team);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML);
    })
    .catch(err =>{
        console.log(err);
    });