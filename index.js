
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');

const name =    
 inquirer
 .prompt([
    {
      type: 'input',
      name: 'Manager',
     message: 'Enter Manager Name',
    },
    {
        type: 'input',
        name: 'Id',
        message: 'Enter ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Email'
    }

]).then((data) =>{
    if(data.Manager == 'Manny'){
        console.log("test");
    }
})
//console.log(manager);
//makeEmployee();

//console.log(employee);
//let id = employee.getId();
//let email = employee.getEmail();


//console.log(Manager.name + " " +Manager.getRole());
/*function makeEmployee(){
    inquirer
    .prompt([
        {
          type: 'input',
          name: 'Manager',
         message: 'Enter Manager Name',
        },
        {
            type: 'input',
            name: 'Id',
            message: 'Enter ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email'
        }

    ]).then((data) => {
        manager = new Manager(data.Manager,data.Id,data.email);
    });
}*/

