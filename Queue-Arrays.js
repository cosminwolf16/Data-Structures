class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
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
