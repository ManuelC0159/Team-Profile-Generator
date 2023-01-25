const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee{



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