const address = {
    city: 'Some City',
    street: 'Some Street',
    country: 'Some Country'
}

//Traditional Way
// const street = address.street;
// const city = address.city;
// const country = address.country;

// ES-6 Way 

const { street, city } = address;

console.log(address);
console.log(street);
console.log(city);

// Renaming 

const { country: ct } = address
console.log(ct);

