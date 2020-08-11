
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
		
	}
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
	peek() {}
}
