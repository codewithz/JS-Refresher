const person = {
    name: 'Zartab Nakhwa',
    walk() {
        console.log(this);
    }
};

person.walk();

const myWalk = person.walk.bind(person);

myWalk();

function someFuntion() {
    console.log("Test ", this);
}

const testVariable = someFuntion.bind(person);

testVariable();

console.log(person);


