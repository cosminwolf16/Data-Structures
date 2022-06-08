class HashTable {
  constructor() {
    this.size = 16;
    this.buckets = Array(16).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table = new HashTable();

for (const char of "academind") {
  table.set(char, char);
}

for (const char of "hello") {
  table.set(char, char);
}

for (const char of "does this work") {
  table.set(char, char);
}

console.log(table.get("o"));

console.log(table.showInfo());
