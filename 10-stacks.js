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
