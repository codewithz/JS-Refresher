import { Person } from "./person";

export class Trainer extends Person {

    constructor(name, degree) {
        super(name);
        this.degree = degree
    }
    train() {
        console.log("Training the candidates with degree holding of ", this.degree);
    }

}