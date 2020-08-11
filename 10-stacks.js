// code out stack
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	// remove
	pop() {
		// if there is no top
		if(!this.top) return -1;
		// if top and bottom node are same
		if(this.length === 1) {
			let top = this.top;
			this.top = null;
			this.bottom = null;
			this.length--;
			return top;
		} else {
			let top = this.top;
			this.top = this.top.next;
			this.length--;
			return top;
		}
	}
	// add to top
	push(data) {
		const node = new Node(data);
		if(!this.top) {
			this.top = node;
			this.bottom = node;
			this.length++;
		} else {
			let temp = this.top;
			this.top = node;
			this.top.next = temp;
			this.length++;
		}
	}
	// see first item on stack
	peek() {
		if(this.top) {
			return this.top;
		} else {
			return 'No top';
		}
	}
}

const stack = new Stack();
stack.push("First Node");
stack.push("Second Node");
stack.push("Third Node");
// stack.pop();
// stack.pop();
// stack.pop();
console.log(stack.peek());
console.log(stack);

// Stack implemented with an array
class StackArray {
	constructor() {
		this.items = [];
	}
	pop() {
		const data = this.items.pop();
		return data;
	}
	push(data) {
		this.items.push(data);
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	printStack() {
		let items = "";
		for(let item of this.items) {
			items = items + " " +  item; 
		}
		return items;
	}
}
const arrayStack = new StackArray();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
arrayStack.push(4);
arrayStack.push(5);
console.log(arrayStack.peek());
console.log(arrayStack.isEmpty());
// console.log(arrayStack.pop());
console.log(arrayStack);
console.log(arrayStack.printStack());




