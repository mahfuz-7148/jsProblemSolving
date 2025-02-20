function reverseArray(array) {
  let reverseElement = []
  for (let i = array.length - 1; i >= 0; i--) {
    reverseElement.push(array[i])
  }
  return reverseElement
}
const output = reverseArray([3, 6, 5, 4, 8])
console.log(output)   // [8, 4, 5, 6, 3]