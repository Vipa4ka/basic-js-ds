const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = add(this.tree, data);

    function add(a, data) {
      if (!a) {
        return new Node(data);
      }
      if (data === a.data) {
        return a;
      }
      if (data < a.data) {
        a.left = add(a.left, data)
      } else {
        a.right = add(a.right, data)
      }
      return a;
    }
  }

  has(data) {
    return has(this.tree, data);

    function has(a, data) {
      if (!a) {
        return false;
      }
      if (data === a.data) {
        return true;
      }

      return data < a.data ? has(a.left, data) : has(a.right, data);
    }
  }

  find(data) {
    return find(this.tree, data);

    function find(a, data) {
      if (!a) {
        return null;
      }
      if (data === a.data) {
        return a;
      }
      return data < a.data ? find(a.left, data) : find(a.right, data);
    }
  }

  remove(data) {
    this.tree = remove(this.tree, data);

    function remove(a, data) {
      if (!a) {
        return
      }

      if (data < a.data) {
        a.left = remove(a.left, data);
        return a;
      }

      if (data > a.data) {
        a.right = remove(a.right, data);
        return a;
      }

      if (!a.left && !a.right) {
        return null;
      }

      if (!a.left) {
        a = a.right;
        return a;
      }

      if (!a.right) {
        a = a.left;
        return a;
      }

      let max = a.left;
      while (max.right) {
        max = max.right;
      }
      a.data = max.data;
      remove(a.left, max.data);
      return a;
    }


  }

  min() {
    if (!this.tree) {
      return;
    }

    let min = this.tree;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.tree) {
      return;
    }

    let max = this.tree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};