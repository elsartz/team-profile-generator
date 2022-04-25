const Manager = require('../lib/Manager.js');

test("test manager's name, ID", () => {
    const manager = new Manager('Name', 1);

    expect(manager.name).toBe('Name');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("test manager's role", () => {
    const manager = new Manager('Name', 1);

    expect(manager.getRole()).toBe('Manager');
});