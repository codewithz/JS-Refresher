const person = {
    talk() {
        const self = this;
        setTimeout(() => {

            console.log("this", this);
        }, 1000);
    }
}

person.talk();