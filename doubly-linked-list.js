class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;

    let count, current;
    
    if (position <= this.length / 2) {
      count = 0;
      current = this.head;
      while (position !== count) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (position !== count) {
        current = current.prev;
        count--;
      }
    }
    
    return current;
  }

  set(position, val) {
    const node = this.get(position);

    if (node) {
      node.val = val;
      return true;
    }
    
    return false;
  }

  push(val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    
    this.length++;
    
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const poppedNode = this.tail;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    
    this.length--;
    
    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
    
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    const shiftedNode = this.head;
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    
    this.length--;
    
    return shiftedNode;
  }

  insert(position, val) {
    if (position < 0 || position > this.length) return false;
    if (position === 0) return !!this.unshift(val);
    if (position === this.length) return !!this.push(val);

    const prevNode = this.get(position - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(val);

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    
    this.length++;

    return true;
  }

  remove(position) {
    if (position < 0 || position > this.length) return undefined;
    if (position === 0) return this.shift();
    if (position === this.length) return this.pop();

    const removedNode = this.get(position);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = removedNode.next;
    nextNode.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    
    this.length--;

    return removedNode;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
