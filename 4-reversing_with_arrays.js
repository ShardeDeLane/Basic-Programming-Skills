// reversing a string
// function reverse(str) {
//   if (typeof str !== "string" || str.length < 2) {
//     return "Invalid input";
//   }
//   // split on each character
//   const arr = str.split("");
//   const len = arr.length - 1;
//   const result = [];
//   // reverse iterate through the string
//   for (let i = len; i >= 0; i--) {
//       result.push(arr[i]);
//   }
//   return result.join("");
// }
// const str = "12345";
// const revStr = reverse(str);
// console.log(revStr);

function reverse(str) {
  // split on each character
  const arr = str.split("");
  const len = arr.length - 1;
  const midpoint = Math.floor(len / 2);

  for (let i = 0; i <= midpoint; i++) {
    // flipping elements
    let temp = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = temp;
  }

  return arr.join("");
}
const str = "12345";
const revStr = reverse(str);
console.log(revStr);
