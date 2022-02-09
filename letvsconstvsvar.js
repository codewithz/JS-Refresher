function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log("Inside the for: ", i);
    }

    console.log("After the for loop: ", i);
}

sayHello();

function sayHi() {
    for (let i = 0; i < 5; i++) {
        console.log("Inside the for: ", i);
    }

    //  console.log("After the for loop: ", i);
}

sayHi();

function checkSomething() {
    let testVariable = 'Hello Sony';
}

//console.log(testVariable);


//----------------------------------------------------

const someValue = "Test Value";

someValue = "Hello";