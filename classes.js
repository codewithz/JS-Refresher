//Objects,Function --> camelCasing
//Class --> Pascal Casing 

//camelCasing --> oneTwoThreeFour
//PascalCasing --> OneTwoThreeFour


// const person = {
//     name: 'Zartab',
//     walk() {
//         console.log("Walking")
//     }
// }


class Person {

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Walking")
    }
}

const person1 = new Person("Zartab");
person1.walk();
console.log(person1.name);

const person2 = new Person("Arun");
console.log(person2.name);
person2.walk();

