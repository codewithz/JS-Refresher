console.log("Before");
getUser(1, (user) => {
    console.log("User", user);

    //Get the repos
    getRepositories(user.gitUser, (repos) => {
        console.log("Repos:", repos);
    })
});

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from database ...");
        callback({ id: id, gitUser: 'codewithz' });
    }, 2000);


}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling the Github API for user[" + username + "].....");
        const repos = ['Repo1', 'Repo2', 'Repo3'];
        callback(repos);
    }, 3000)
}