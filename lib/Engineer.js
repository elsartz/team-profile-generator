const Employee = require('./Employee');

class Engineer extends Employee { 
    constructor (name = '', github){
        super(name);
        this.github = github;
    }

    getGithub(){

    }

    getRole() { 
        return `Engineer`
    }
}
module.exports = Engineer;