const Engineer = require('../lib/Engineer.js');

test("test engineer's name, school", () => {
    const engineer = new Engineer('Name', 'gituser');

    expect(engineer.name).toBe('Name');
    expect(engineer.github).toEqual(expect.any(String));
});

test("test engineer's role", () => {
    const engineer = new Engineer('Name', 'Carleton');

    expect(engineer.getRole()).toBe('Engineer');
});

test("test engineer's GitUrl", () => {
    const engineer = new Engineer('Name', 'Carleton');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})