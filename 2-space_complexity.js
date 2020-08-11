// space complexity - looks at memory usage of a function relative to size of the input
// What makes space complexity increase ?
// assigning variables
// creating new data structures
// function calling and allocation

function test(arr) {
  // space complexity - O(1)
  // time complexity - O(n)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// space - O(n)
function test2(arr) {
  let count = 0;
  const result = [];
  // time complexity - O(n)
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  return result;
}
const arr = [1, 2, 3, 4, 5];
test(arr);
console.log(test2(arr));
