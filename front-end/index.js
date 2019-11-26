class Human {
    constructor(){
        this.gender = 'female';
    }

    printGender() {
        console.log(this.gender);
    }
}

// const human = new Human();
// human.printGender();

//class structure
class Person extends Human{
    constructor(){
        super();
        this.name = 'Leonardo';
        this.gender = 'male';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
