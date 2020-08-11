// code out queue
// queues - front of the line always gets processed first
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	// show first node in queue
	peek() {
		if(!this.first) return null;
		return this.first;
	}
	// if there is no first add a new first, otherwise get in the back of the line
	enqueue(data) {
		const node = new Node(data);
		if(!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.length++;
		return this;
	}
	// first person gets on the bus (first popped off - then first.next is the new first)
	dequeue() {
		const trackingNode = this.first;
		if(this.first === this.last) {
			this.first = null;
			this.last = null;
			return trackingNode;
		}
	    this.first = this.first.next;
		this.length--;
		return trackingNode; 
	}
}

const q = new Queue();
q.enqueue("First in line");
q.enqueue("2nd in line");
q.enqueue("3rd in line");
q.enqueue("4th in line");
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);
