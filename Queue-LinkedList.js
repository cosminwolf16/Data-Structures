import { LinkedList } from "./LinkedList.js";

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.append(value);
  }

  dequeue(value) {
    this.items.deleteHead(value);
  }

  isEmpty() {
    return !this.items.length;
  }

  toArray() {
    return this.items.toArray();
  }
}

const queue = new Queue();

queue.enqueue("Cosmin");
queue.enqueue("Lupina");
queue.enqueue("Bulina");

console.log(queue.toArray());

queue.dequeue();
console.log(queue.toArray());

queue.dequeue();
console.log(queue.toArray());
