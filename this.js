const person = {
    name: 'Zartab Nakhwa',
    walk() {
        console.log(this);
    }
};

person.walk();

const myWalk = person.walk;

myWalk();

const person2 = {
    name: 'Test'
}

person2.walk = person.walk;
//console.log(person2);
person2.walk();