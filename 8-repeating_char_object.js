// first repeating character algorithm
// brute force - not the best solution to use
// The brute force answer is wrong - in terms that it is NOT the FIRST repeating character in the array. 5 is, but, with the brute force approach, it literally CANNOT find the 5 as being the first repeating character, because bruteForce iterates O(n) through the entire array before incrementing i. This is yet another drawback of using a brute force solution, and why you should not.
// For an input array =  [1, 5, 2, 4, 5, 7, 1], the results are different. the bruteForce(array) returns 1, while the usingObject (array) returns 5

function bruteForce(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      counter++;
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  console.log(counter);
  return -1;
}
// const arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9];
// const brute = bruteForce(arr);
// console.log(brute);

// Objects - O(n)
function usingObjects(arr) {
  let counter = 0;
  const obj = {};
  for (let char of arr) {
    counter++;
    if (obj[char]) {
      return char;
    } else {
      obj[char] = 1;
    }
  }
  console.log(counter);
  return -1;
}
// const arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8];
// const objResult = usingObjects(arr);
// console.log(objResult);

// Arrays - O(n)
function usingArrays(arr) {
  const array = [];
  let count = 0;

  for (let char of arr) {
    count++;
    if (array.includes(char)) return char;
    else array.push(char);
  }
  console.log(count);
  return -1;
}
const arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8];
const arrResult = usingArrays(arr);
console.log(usingArr);
