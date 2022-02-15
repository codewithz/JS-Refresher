const p = new Promise((resolve, reject) => {

    //Kick off some async work
    //....
    setTimeout(() => {
        console.log("Some Async work...");
        //resolve(1);
        reject(new Error('Error Message'));
    }, 2000);


});

p
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    })