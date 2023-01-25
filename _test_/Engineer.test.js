const Engineer = require('../lib/engineer');

test('engineer', ()=>{

    const engineer = new Engineer('Manny', 23354, 'manny@gmail.com', 'MannyC0159');

    expect(engineer.github).toEqual(expect.any(String));

})
test('guthub from interwebs', ()=> {
    const engineer = new Engineer('Manny', 23354, 'manny@gmail.com', 'MannyC0159');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('role',()=>{

    const engineer = new Engineer('Manny', 23354, 'manny@gmail.com', 'MannyC0159');
    expect(engineer.getRole()).toEqual("Engineer");
} )