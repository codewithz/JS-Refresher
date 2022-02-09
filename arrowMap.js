const colors = ['red', 'green', 'blue'];


function listColors(color) {
    return `<li>${color}</li>`;
}

const mappedArray = colors.map(listColors);

console.log("Source: ", colors);
console.log("----------------------")
console.log("Mapped Array: ", mappedArray);