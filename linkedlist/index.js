// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst (data) {
    this.head = new Node(data, this.head)
  }

  size () {
    let count = 0
    let head = this.head
    while (head) {
      count += 1
      head = head.next
    }
    return count
  }

  getFirst () {
    return this.head
  }

  getLast () {
    let node = this.head
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }

  clear() {
    this.head = null
  }


  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
    }
  }

  removeLast () {
    if (this.head && this.head.next) {
      let prev = this.head
      let node = this.head.next
      while (node) {
        if (!node.next) {
          prev.next = null
        }
        prev = node
        node = node.next
      }
    } else {
      this.head = null
    }
  }

  insertLast (data) {
    const last = this.getLast()
    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt (i) {
    if (!this.head) {
      return null
    }

    let counter = 0
    let node = this.head
    while (node) {
      if (counter === i) {
        return node
      }
      counter += 1
      node = node.next
    }

    return null
  }

  removeAt (i) {
    if (!this.head) {
      return null
    } else if (i === 0) {
      if (this.head.next) {
        this.head = this.head.next
      } else {
        this.head = null
      }
    } else {
      const prev = this.getAt(i - 1)
      prev.next = prev.next ? prev.next.next : null
    }
  }

  insertAt (data, i) {
    if (!this.head || i === 0) {
      this.insertFirst(data)
      return
    }

    if (!this.getAt(i)) {
      this.insertLast(data)
      return
    }

    const prev = this.getAt(i - 1)
    const newNode = new Node(data)
    newNode.next = prev.next || null
    prev.next = newNode
  }

  forEach(fn) {
    let node = this.head
    let count = 0
    while (node) {
      fn(node, count)
      count++
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
