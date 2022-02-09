const jobs = [
    { id: 1, position: 'Developer', isActive: true },
    { id: 2, position: 'Tester', isActive: true },
    { id: 3, position: 'Devops', isActive: false },
    { id: 4, position: 'Manager', isActive: true }
]

// function activeJobs(job) {
//     return job.isActive;
// }

const filteredJobs = jobs.filter(job => job.isActive);

console.log("Source:", jobs);
console.log("-----------------------");
console.log("Filtered: ", filteredJobs);