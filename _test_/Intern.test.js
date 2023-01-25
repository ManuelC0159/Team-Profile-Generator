const Inter = require('../lib/intern');


test('intern', ()=>{
    const inter = new Inter('Manny', 23354, 'manny@gmail.com', 'UCF');
    expect(inter.school).toEqual(expect.any(String));
})

test('getSchool', () =>{

    const inter = new Inter('Manny', 23354, 'manny@gmail.com', 'UCF');
    expect(inter.getSchool()).toEqual(expect.stringContaining(inter.school.toString()))

})

test('getRole', ()=>{
    const inter = new Inter('Manny', 23354, 'manny@gmail.com', 'UCF');
    expect(inter.getRole()).toEqual("Intern");
})