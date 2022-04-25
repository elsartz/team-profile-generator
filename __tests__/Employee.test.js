const Employee = require('../lib/Employee.js');

test('should return a name, a number and an email', () => {
    const employee = new Employee('Name');

    expect(employee.name).toBe('Name');
    employee.id = 1;
    expect(employee.id).toEqual(expect.any(Number));
    employee.email = 'email@example.com';
    expect(employee.email).toEqual(expect.any(String));
});

test('should get a name', () => {
    const employee = new Employee('Name');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('should get a number as an Id', () => {
    const employee = new Employee('Name');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('should get an email', () => {
    const employee = new Employee('Name');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('should get a role', () => {
    const employee = new Employee('Name');

    expect(employee.getRole()).toEqual('Employee');
});