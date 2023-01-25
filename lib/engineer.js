const Employee = require('./employee');
const inquirer = require('inquirer');


class Engineer extends Employee{
    constructor(github){
        super(name,id,email)
        this.github = github;
    }

    getGithub(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub link',
            }
        ])
        .then((data)=> {this.github = data});
    }
    getRole(){return 'Engineer'};
} 

module.exports = Engineer;