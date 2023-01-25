const Manager = require('../lib/manager');


test('Manager', ()=> {
    const manager = new Manager('Manny', 23354, "manny@gmail.com", 72);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('getRole', ()=> {
    const manager = new Manager('Manny', 23354, "manny@gmail.com", 72);

    expect(manager.getRole()).toEqual("Manager");
})