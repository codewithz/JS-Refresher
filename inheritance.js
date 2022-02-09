class Person {

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Walking")
    }
}

class Trainer extends Person {

    constructor(name, degree) {
        super(name);
        this.degree = degree
    }
    train() {
        console.log("Training the candidates with degree holding of ", this.degree);
    }

}

const trainer = new Trainer('Zartab', 'Masters in IT');
trainer.train();