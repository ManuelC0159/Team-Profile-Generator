const Employee = require('../lib/employee');
test('employee', () =>{
    const employee =new Employee('Manny', 23354, 'manny@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('employee name', () =>{
    const employee =new Employee('Manny', 23354, 'manny@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('employee id', () => {
    const employee =new Employee('Manny', 23354, 'manny@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('employee email', () => {
    const employee =new Employee('Manny', 23354, 'manny@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('role', ()=>{
    const employee =new Employee('Manny', 23354, 'manny@gmail.com');

    expect(employee.getRole()).toEqual("Employee")
})