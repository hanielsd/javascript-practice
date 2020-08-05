class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`The person named ${this.name} is walking right now`);
    }
}
const person = new Person("Halefom");
person.walk();