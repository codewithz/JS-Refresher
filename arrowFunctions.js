function sayHello() {
    console.log("Hello World");
}


let v1 = () => {
    console.log("Hello World from Arrow Function");
}

sayHello();
v1();

function squareMe(number) {
    return number * number;
}

const square = (number) => {
    return number * number;
}

console.log(square(5));

//Single Parameter -- we can get rid of paranthesis 

const square1 = number => {
    return number * number;
}

console.log(square1(6));

//If a single statement is passed in function body, it returns it and no need for {}
const square2 = number => number * number;

console.log(square2(9));

// Mulitple Parameters 

function add(a, b, c) {

    return a + b + c;

}

const add1 = (a, b, c) => a + b + c;

console.log(add1(1, 2, 3));

function someCalculation(a, b, c) {
    const d = a + b;
    const e = a + c;
    return d - e;
}

const someCalc = (a, b, c) => {
    const d = a + b;
    const e = a + c;
    return d - e;
}

console.log(someCalc(5, 4, 3));


