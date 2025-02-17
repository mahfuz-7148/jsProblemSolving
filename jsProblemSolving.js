// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 

// Example:
// Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
// Output: 8

// Constraints:
// using built-in functions is prohibited

function countWords(str) {
    if(typeof str !== 'string'){
        console.log(`invalid`)
        return
    }
    let count = 0
    let hasWord = false
    for (let char of str) {
        if (char !== ' ') {
            hasWord = true;
        }
        else if (hasWord) {
            count++
            hasWord = false
        }
    }
   console.log(hasWord ? count + 1: count) 
}
countWords("DEV ZeroOne is a Next-Gen Programming Learning Platform.")
