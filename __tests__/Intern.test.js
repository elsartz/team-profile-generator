const Intern = require('../lib/Intern.js');

test("test intern's name, school", () => {
    const intern = new Intern('Name', 'Carleton');

    expect(intern.name).toBe('Name');
    expect(intern.school).toEqual(expect.any(String));
});

test("test intern's role", () => {
    const intern = new Intern('Name', 'Carleton');

    expect(intern.getRole()).toBe('Intern');
});