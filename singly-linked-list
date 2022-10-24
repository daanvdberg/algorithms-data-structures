class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let head = this.head;
    this.head = head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return head;
  }

  get(position) {
    if (!this.head || position < 0 || position >= this.length) return null;

    let index = 0;
    let current = this.head;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current;
  }

  set(position, value) {
    const node = this.get(position);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(value);
    if (position === this.length) return !!this.push(value);

    const prevNode = this.get(position - 1);
    const currentNode = prevNode.next;
    const newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) return undefined;
    if (position === 0) return !!this.shift();
    if (position === this.length - 1) return !!this.pop();

    const prevNode = this.get(position - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    this.length--;
    return removedNode;
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
