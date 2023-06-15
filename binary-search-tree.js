"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    //base case: both left and right are null
    //base case2: check if val  = target, if so return val
    if (this.val === val) return this;
    if (!this.left && !this.right) {
      return undefined;
    }

    //recursive calls
    let tempResult = undefined;
    //if (this.left) return recursive call to left
    if (this.left) {
      tempResult = this.left.findRecursively(val);
      if (tempResult) return tempResult;
    }
    //if right exists, return recursive call to right
    if (this.right) {
      tempResult = this.right.findRecursively(val);
      if (tempResult) return tempResult;
    }
    return undefined;
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    //check if val is less or more than callign node value

    //side variable = val > node val ? right: left
    if (val <= this.val) {
      if (!this.left) {
        this.left = new Node(val);
        return this.left;
      } else {
        this.left.insertRecursively(val);
      }
    } else {
      if (!this.right) {
        this.right = new Node(val);
        return this.right;
      } else {
        this.right.insertRecursively(val);
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {}

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);

    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined

    let current = this
    //check if the current node exists
    if (current) {
      if (current.val === val) return current

      current = 
    }
      //if it exists, does its value equal target value? return the node

    //update current based on if target is greater than or less than value



  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {}

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};
