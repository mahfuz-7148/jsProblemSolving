// Write a JavaScript Function   printNumber  that takes an integer N and prints all the numbers between 0 to N.

//     Example:
// Input: 5
// Output: 0 1 2 3 4 5

// Constraints: 0 < N 


function printNumber(N) {
    if (N <= 0) {
       return "N must be greater than 0"
    }
    let output = "";
    for (let i = 0; i <= N; i++) {
        output += i + " ";
    }
   return output.trim()
}
let output = printNumber(5)
console.log(output) //0 1 2 3 4 5