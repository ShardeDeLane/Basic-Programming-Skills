// merge two sorted arrays - O(n)
function mergeSorted(arr1, arr2) {
  const result = [];
  let left = 0;
  let right = 0;
  const length = arr1.length + arr2.length;
  let count = 0;

  while (result.length < length) {
    if (arr1[left] === undefined) {
      result.push(arr2[right]);
      right++;
      count++;
    } else if (arr2[right] === undefined) {
      result.push(arr1[left]);
      left++;
      count++;
    } else if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
      count++;
    } else {
      result.push(arr2[right]);
      right++;
      count++;
    }
  }

  // number of operations
  console.log(`Count: ${count}`);
  // length of elements in array
  console.log(`Length: ${length}`);
  return result;
}

const arr1 = [1, 3, 5, 7, 9, 22, 33, 44, 55];
const arr2 = [2];
console.log(mergeSorted(arr1, arr2));
