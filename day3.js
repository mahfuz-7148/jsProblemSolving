


// Write a JavaScript function removeWords  that takes a string as input and returns the remaining string after removing the first three characters.

//       1) If the input is null, undefined, or the empty string, it returns "Invalid input".
//       2) If the string length is three or less, it returns "String too short to remove".
//       3) Do not use any built-in string methods such as .slice() or .substring().

// Input: "Dev Zero One"
// Output: " Zero One"

// Input: "I love programming"
// Output: "ove programming"

// Input: "Hello World"
// Output: "lo World"

// Input: "JS Rocks!"
// Output: "Rocks!"

// Input: "Yes"
// Output: "String is too short to remove"

// Input: ""
// Output: "Input is Invalid"

function removeWords(str){
    if(str === null || str === undefined || str === ''){
        return "Invalid input"
    }
    let size = str.length
    if(size <= 3){
        return "String is too short to remove"
    }
    let newString = ''
    let index = 0
    for (const item of str) {
        if(index >= 3){
            newString += item
        }
        index++
    }
    return newString

  }
  let str = "I love programming"
  let output = removeWords(str)
  console.log(output)




