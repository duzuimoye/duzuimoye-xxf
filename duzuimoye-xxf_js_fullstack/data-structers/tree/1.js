class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}
const abe = new TreeNode('abe');
const homer = new TreeNode('homer');
const bart = new TreeNode('bart');
const lisa = new TreeNode('lisa');
const maggie = new TreeNode('maggie');

abe.descendents.push(homer);
homer.descendents(bart, lisa, maggie);