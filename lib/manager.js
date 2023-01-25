const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }


    getOfficeNum(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'office',
                message: 'What is the Office Number',
            }
        ])
        .then((data) => {this.officeNumber = data});
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;