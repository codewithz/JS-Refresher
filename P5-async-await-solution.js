console.log("Before");

//Callback Approach

// getUser(1, (user) => {
//     console.log("User", user);

//     //Get the repos
//     getRepositories(user.gitUser, (repos) => {
//         console.log("Repos:", repos);
//     })
// });

//Promise Based Approach

// const p = getUser(1);

// p
//     .then(user => getRepositories(user.gitUser))
//     .then(repos => {
//         console.log(repos)
//     })
//     .catch(error => {
//         console.log("Error", error.message);
//     })

//Async and Await Approach
async function displayRepos() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitUser);
        console.log(repos);
    } catch (error) {
        console.log('Error', error.message);
    }

}
displayRepos();

console.log("After");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from database ...");
            resolve({ id: id, gitUser: 'codewithz' });
        }, 2000);
    })



}

function getRepositories(username) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling the Github API for user[" + username + "].....");
            const repos = ['Repo1', 'Repo2', 'Repo3'];
            // resolve(repos);
            reject(new Error('Test Error Message'))
        }, 3000)
    })

}