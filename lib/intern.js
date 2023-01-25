const Employee = require('./employee');
const inquirer = require('inquirer');

class Intern extends Employee{

    constructor(school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'What is your school name',
            }
        ])
        .then((data)=> {this.school = data});
    }

    getRole(){return 'Intern'}
}

module.exports = Intern;