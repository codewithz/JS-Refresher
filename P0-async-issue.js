console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

//Callback Function
// Promises 
// Async /Await

function getUser(id) {
    setTimeout(() => {
        console.log("Reading a user from database ...");
        return { id: id, gitUser: 'codewithz' };
    }, 2000);

    return 1;
}