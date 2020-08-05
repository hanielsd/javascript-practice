const person = {
    name: "Halefom",
    walk() {
        //using single or double qoute
        console.log("The person named " + this.name + " is walking right now");
    },
    talk() {
        //using back tick i.e `` for string and this lets you to use template literal syntax i.e ${variable_name}
        console.log(`The person named ${this.name} is talking right now`);
    }
};

person.walk();
person.talk();