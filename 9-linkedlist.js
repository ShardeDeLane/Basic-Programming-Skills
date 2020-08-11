class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  prepend(data) {
    const node = new Node(data);
    if(!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
  append(data) {
    const node = new Node(data);
    if(!this.head) {
      this.prepend(data);
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  traverse() {
    let current = this.head;
    const result = [];
    while(current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
  getProps() {
    console.log(`The head is : ${this.head.data} || the tail is: ${this.tail.data} the length is : ${this.length}`);
  }
  removeHead() {
    if(!this.head) return -1;
    this.head = this.head.next;
    this.length--;
  }
  removeTail() {
    let current = this.head;
    let counter = 0;
    while(counter < this.length - 2) {
      current = current.next;
      counter++;
    }
    current.next = null;
    console.log(current);
    this.tail = current;
    this.length--;
  }
  removeNode(index) {
    if(index === 0) this.removeHead();
    else if(index - 1 === this.length - 1) this.removeTail();
    else {
      let counter = 0;
      let current = this.head;
      while(counter < index - 1) {
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
      console.log(current);
      this.length--;
    }
  }
  insert(index, data) {
    // [1, 2, 3, 4]
    // [1, 2, "insert here", 3, 4]
    if(index < 0 || index > this.length) return -1;
    if(index === 0) this.prepend(data);
    else if(index - 1 === this.length - 1) this.append(data);

    const newNode = new Node(data);
    let counter = 0;
    let current = this.head;

    while(counter < index - 1) {
      current = current.next;
      counter++;
    }
    let temp = current.next;
    current.next = newNode;
    newNode.next = temp;
    this.length++;
  }
  reverse() {
    if(!this.head) return -1;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next;
    for(let i = 0; i < this.length; i++) {
      // [1, 2, 3, 4]
      // [4, 3, 2, 1]
      next = current.next;
      current.next = prev;
      prev = current;
      current = next; 
    }
  }
}

const list = new LinkedList();
list.append("Node1");
list.append("Node2");
list.append("Node3");
list.append("Node4");
console.log(list.traverse());
list.getProps();
console.log("***********");
console.log(list.insert(2, "new node"));
console.log(list.traverse());
// list.reverse();
// console.log(list.traverse());
// list.getProps();
