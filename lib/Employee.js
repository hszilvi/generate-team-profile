// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;    
    }
    getName() {
        if (!this.name) {
            this.name = false;
        } else {
           return `${this.name}`;
        }
    }
    getId() {
        if ((typeof this.id) !== 'number') {
            this.id = false;
        } else {
           return this.id;
        }
    }
    getEmail() {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.email.match(validRegex)) {
            return this.email;
        } else {
            return false;
        }
        // email validator needed
        console.log('email')
    }
    getRole() {
        return `Employee`;
    }
}


module.exports = Employee;