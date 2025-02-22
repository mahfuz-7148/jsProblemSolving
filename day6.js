function filterIntegers(array) {
  if (!Array.isArray(array) || array.length === 0) {
  return 'Array length cannot be zero or negative.'
  }

  let filterNumber = [];
  for (let element of array) {
    if (typeof element === "number" && element % 1 === 0) {
      filterNumber.push(element)
    }
  }

  return filterNumber
}

const input = [3, 6, "hello", 4, "3", 8];
console.log(filterIntegers(input)); 
