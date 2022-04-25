class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() { 
        return 'this.name';
    }

    getId() { 
        return 2;
    }

    getEmail() {
        return 'email@example.com';
    }

    getRole() {
        return `Employee`
    }

}

module.exports = Employee;