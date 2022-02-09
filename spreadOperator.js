const first = [1, 2, 3];
const second = [4, 5, 6];
//1,2,3,a,4,5,6,b
const combinedTraditional = first.concat(second);
console.log(combinedTraditional)

const combined = [...first, ...second];
console.log(combined);

const combinedNew = [...first, 'a', ...second, 'b'];
console.log(combinedNew)

const cloneFirst = [...first];
console.log(cloneFirst);


//-------------------------------------------------------------

const grades = ['C', 'A', 'B', "D"];
console.log("Before Sorting: ", grades);
const sortedGrades = [...grades].sort();
console.log("New Array After Sorting: ", sortedGrades);
console.log("Original  Array After Sorting: ", grades);

//---------------------------------------------------------------

const name = { name: 'Zartab Nakhwa' };
const job = { job: 'Corporate Trainer' };

const combinedObject = { ...name, ...job, location: 'Mumbai' };

console.log(combinedObject);