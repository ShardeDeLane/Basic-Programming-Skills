// code out array from scratch
class TestArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.shiftIndex(index);
  }
  shiftIndex(index) {
    // [1, 2, 3]
    // [1, , 3] => [1, 3, 3]
    // [1, 3]

    // [ , 2, 3]
    // [2, 2, 3]
    // [2, 3]
    for (let i = index; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.data.length - 1];
    this.length--;
  }
}

const arr = new TestArray();
arr.push("First Element");
arr.push("Second Element");
arr.push("Last Element");
arr.delete(3);
console.log(arr);
