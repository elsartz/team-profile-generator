const Employee = require('../lib/Employee.js');

test('should return a name, a number and an email', () => {
    const employee = new Employee('Vardis');

    expect(employee.name).toBe('Vardis');

    employee.id = 1;
    expect(employee.id).toEqual(expect.any(Number));

    employee.email = 'vardis@gmail.com';
    expect(employee.email).toEqual(expect.any(String));
});