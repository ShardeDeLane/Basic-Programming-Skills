// time complexity - does the length of the input affect the time that it takes to complete the output
// linear time O(n)
function linear(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

// constant time O(1)
function constant(arr) {
  return arr[0];
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(constant(arr));

// simplifying big O
// calculate big 0
function test(input) {
  let result = []; // O(1)
  const sorted = true; // O(1)
  input = input.split(""); // O(n)
  let current; // O(1)
  // O(n)
  for (let i = 0; i < input.length; i++) {
    current = input[i]; // O(n)
    result.push(current); // O(n)
  }
  return result; // O(1)
}
// O(5 + 4n) => O(n)

// calculate big O
function test2(input) {
  const pi = 3.14; // O(1)
  let found = false; // O(1)
  let sorted = null; // O(1)
  let testCase = 0; // O(1)
  let secondCase = 1; // O(1)
  // O(n)
  for (let i = 0; i < input.length; i++) {
    otherFunctionToCall(); // O(n)
    sorted = false; // O(n)
    testCase++; // O(n)
    secondCase--; // O(n)
  }
  return testCase - secondCase; // O(1)
}
// O(6 + 5n)

// O(n)
function test3(input) {
  return true; // O(1)
}
