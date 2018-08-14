function BinarySearchTree () {
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  var root = null;

  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  function inOrderTraverseNode(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  function preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      inOrderTraverseNode(node.left, callback);
      inOrderTraverseNode(node.right, callback);
    }
  }

  function postOrderTraverseNode(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      inOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  
  this.insert = function(key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  }
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  }

  var maxNode = function(node) {
    if(node) {
      while(node && node.right!==null) {
        node = node.right;
      }
      return node.key
    }
    return null;
  }

  this.max = function() {
    return maxNode(root);
  }
  var searchNode = function(node, key) {
    if(node === null) {
      return false;
    if(key < node.key) {
      return searchNode(node.left, key);
    }else if(key > node.key) {
      return searchNode(node.right, key);
    }else {
      return true;
    }
    }
  }
  this.search = function(key) {
    return searchNode(root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

var printNode = function(val) {
  console.log(val);
}

tree.inOrderTraverse(printNode);
console.log('-----------/n');
tree.preOrderTraverse(printNode);
console.log('-----------/n');
tree.postOrderTraverse(printNode);
console.log('-----------/n');
// 遍历一次， 中序遍历



