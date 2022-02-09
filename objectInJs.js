const person = {
    name: 'Zartab Nakhwa',
    age: 31,
    blog: 'http://www.codewithz.com',
    walk() {
        console.log('Walking')
    },
    talk() {
        console.log('Talking')
    }
}

person.talk()

person['city'] = 'Mumbai';

const targetMember = 'car';
const targetValue = 'Honda City';
person[targetMember] = targetValue;


console.log(person);