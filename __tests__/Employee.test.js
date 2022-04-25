const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');

test('should return a name, a number and an email', () => {
    const employee = new Employee('Name');

    expect(employee.name).toBe('Name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});