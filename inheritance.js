class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`A person named ${this.name} is walking right now`);
    }
}
class Teacher extends Person {
    constructor(name, degree) {
        super(name);//calling the constructor of the parent class
        this.degree = degree;
    }
    teach() {
        console.log(`A teacher named ${this.name} is teaching right now`);
    }
    introduce() {
        console.log(`Hello, I am ${this.name} and studied ${this.degree}`);
    }
}

const teacher = new Teacher("Hagos", "MSc");
teacher.introduce();
teacher.teach();
teacher.walk();