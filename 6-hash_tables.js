// most common data structure along with arrays
// called objects in JavaScript, but also known as dictionaries, hash maps or hash tables in other languages

// time complexity : look up : O(1), insert: O(1)
// Delete: O(1), Search: O(1)

// instead of storing resources contiguously (arrays stored in chunks at a specific place in memory)
// objects are stored with a specific memory address that can be spread all over memory making look up times faster

// the address that a resource is stored is dependent upon the hash function the resource is ran through before assigning a place in memory

// some popular hashing functions are Sha256, MD5
// These functions are idempotent - meaning a function given an input will always have the same output

// drawbacks
// memory usage - given each resource has a specific spot in memory that it will be stored, we run risk of running into conflicts
// we will see when not to use an object as a data structure in JavaScripts
[4, 8, 16, 32, 64, 128]
// hash function
function hash(key) {
  let hash = 0;
  // iterate through the key
  for (let i = 0; i < key.length; i++) {
    let char = key.charCodeAt(i);
    // left shift operator - shifts first operand the specified number of bits to left
    // excess bits shifted off are discarded
    hash = (hash << 5) - hash + char;
    // or equal - if you have a really long number that is negative
    // or positive it will flatten it toward 0
    hash |= 0;
  }
  return hash;
}
const hashResult = hash(
  "test is this string we have entered and now we are making it longer"
);
console.log(hashResult);
