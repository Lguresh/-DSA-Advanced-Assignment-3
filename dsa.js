// 1.) Implement Binary tree
class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  var root = null;
  
  //  insert Nodes
  function insertNode(root, val) {
    if (root == null) {
      var node = new Node(val);
      root = node;
      return root;
    }
    if (val < root.value) {
      root.left = insertNode(root.left, val);
    }
    if (val > root.value) {
      root.right = insertNode(root.right, val);
    }
    return root;
  }
  root = insertNode(root, 8);
  root = insertNode(root, 10);
  root = insertNode(root, 2);
  root = insertNode(root, 1);
  root = insertNode(root, 12);
  root = insertNode(root, 45);
  root = insertNode(root, 7);
  
  console.log(root);
  
  //=============================================== //
  
  // 2.) Find height of a given tree
  // A binary tree node
class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
 
    let root;
     
     /* Compute the "maxDepth" of a tree -- the number of
       nodes along the longest path from the root node
       down to the farthest leaf node.*/
    function maxDepth(node)
    {
        if (node == null)
            return -1;
        else
        {
            /* compute the depth of each subtree */
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
   
            /* use the larger one */
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
     
    /* Driver program to test above functions */
     
        root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
   
        document.write("Height of tree is : " +
                                      maxDepth(root));
  // ===============================================  //
  
  // 3.) Perform Pre-order, Post-order, In-order traversal
  
  // preOrder root
  
  function preOrder(root) {
    if (root == null) {
      return;
    }
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
  }
  
  // inOrder
  function inOrder(root) {
    if (root == null) {
      return;
    }
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
  }
  // post Order
  function postOrder(root) {
    if (root == null) {
      return;
    }
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
  }
  
  preOrder(root);
  inOrder(root);
  postOrder(root);
  
  // ===============================================  //
  
  // 4.) Function to print all the leaves in a given binary tree
  
  function printLeafNodes(root) {
    if (root == null) return;
  
    if (root.left == null && root.right == null) {
      console.log(root.value + " ");
      return;
    }
    if (root.left != null) printLeafNodes(root.left);
    if (root.right != null) printLeafNodes(root.right);
  }
  printLeafNodes(root);
  
  // ===============================================  //
  
  // 5.) Implement BFS (Breath First Search) and DFS (Depth First Search)
  
  // BFS
  function breadthFirstSearch() {
    var queue = [];
    var result = [];
    var node;
    queue.push(root);
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  console.log(breadthFirstSearch());
  // DFS
  function inOrderDFS() {
    var result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node);
      if (node.right) traverse(node.right);
    }
    traverse(root);
    return result;
  }
  console.log(inOrderDFS());
  
  // ===============================================  //
  
  // 6.) Find sum of all left leaves in a given Binary Tree
  class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}
 
// Passing sum as accumulator and implementing pass by reference
// of sum variable
class Sum {
constructor(){
    this.sum = 0;
    }
}
 
 
    var root;
 
    /* Pass in a sum variable as an accumulator */
    function leftLeavesSumRec( node,  isleft,  summ) {
        if (node == null)
            return;
 
        // Check whether this node is a leaf node and is left.
        if (node.left == null && node.right == null && isleft)
            summ.sum = summ.sum + node.data;
 
        // Pass true for left and false for right
        leftLeavesSumRec(node.left, true, summ);
        leftLeavesSumRec(node.right, false, summ);
    }
 
    // A wrapper over above recursive function
    function leftLeavesSum( node) {
         suum = new Sum();
 
        // use the above recursive function to evaluate sum
        leftLeavesSumRec(node, false, suum);
 
        return suum.sum;
    }
             
        root = new Node(20);
        root.left = new Node(9);
        root.right = new Node(49);
        root.left.right = new Node(12);
        root.left.left = new Node(5);
        root.right.left = new Node(23);
        root.right.right = new Node(52);
        root.left.right.right = new Node(12);
        root.right.right.left = new Node(50);
 
        document.write("The sum of leaves is " + leftLeavesSum(root));
  
  // ===============================================  //
  
  // 7.)Find sum of all nodes of the given perfect binary tree
  
  function sumNodes(l) {
    var leafNodeCount = Math.pow(2, l - 1);
    var vec = [];
    for (var i = 1; i <= l; i++) {
      vec.push([]);
    }
    for (var i = 1; i <= leafNodeCount; i++) {
      vec[l - 1].push(i);
    }
    for (var i = l - 2; i >= 0; i--) {
      var k = 0;
      while (k < vec[i + 1].length - 1) {
        vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
        k += 2;
      }
    }
    var sum = 0;
    for (var i = 0; i < l; i++) {
      for (var j = 0; j < vec[i].length; j++) {
        sum += vec[i][j];
      }
    }
    return sum;
  }
  var l = 3;
  console.log(sumNodes(l));
  
  // ===============================================  //
  
  // 8.)Count subtress that sum up to a given value x in a binary tree
  
  var v;
  function getNode(data) {
    var newNode = new Node(data);
    return newNode;
  }
  function countSubtreesWithSumX(root, x) {
    if (root == null) return 0;
    var ls = countSubtreesWithSumX(root.left, x);
    var rs = countSubtreesWithSumX(root.right, x);
    var sum = ls + rs + root.value;
    if (sum == x) v++;
    return sum;
  }
  function countSubtreesWithSumXUtil(root, x) {
    if (root == null) return 0;
    v = 0;
    var ls = countSubtreesWithSumX(root.left, x);
    var rs = countSubtreesWithSumX(root.right, x);
    if (ls + rs + root.value == x) v++;
    return v;
  }
  var root = getNode(5);
  root.left = getNode(-10);
  root.right = getNode(3);
  root.left.left = getNode(9);
  root.left.right = getNode(8);
  root.right.left = getNode(-4);
  root.right.right = getNode(7);
  var x = 7;
  console.log(countSubtreesWithSumXUtil(root, x));
  
  // ===============================================  //
  
  // 9.)Find maximum level sum in Binary Tree
  
  function maxLevelSum(root) {
    if (root == null) return 0;
    var result = root.value;
    var q = [];
    q.push(root);
    while (q.length != 0) {
      var count = q.length;
      var sum = 0;
      while (count-- > 0) {
        var temp = q.shift();
        sum = sum + temp.value;
        if (temp.left != null) q.push(temp.left);
        if (temp.right != null) q.push(temp.right);
      }
      result = Math.max(sum, result);
    }
    return result;
  }
  console.log(maxLevelSum(root));
  
  // ===============================================  //
  
  // 10.)Print the nodes at odd levels of a tree
  
  function printOddNodes(root, isOdd) {
    if (root == null) return;
  
    if (isOdd == true) console.log(root.value);
  
    printOddNodes(root.left, !isOdd);
    printOddNodes(root.right, !isOdd);
  }
  
  function newNode(data) {
    let node = new Node(data);
    return node;
  }
  var root = newNode(1);
  root.left = newNode(2);
  root.right = newNode(3);
  root.left.left = newNode(4);
  root.left.right = newNode(5);
  printOddNodes(root, true);
  
  // =============================================== //
  
  //  END////
