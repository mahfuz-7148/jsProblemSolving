function oddIndex(array) {
    if (array.length <= 0) {
        return "Array length cannot be negative or zero.";
    }
    let oddElement = []
    let index = 0
    for (let value of array) {
        if (index % 2 !== 0 || index === 0) {
           oddElement.push(value);
        }
        index++
    }
    if (oddElement.length < 3) {
      oddElement.push("DEVZEROONE");
    } else if (oddElement.length > 3) {
        oddElement.unshift("DEVZEROONE");
    }
    return oddElement
}
let output = oddIndex([1, 2, 3]);
console.log(output)