// trees consists of nodes with parent/child relationships
// node can only point to a child, not a sibling
// can only have one root/entry point
// root is top node in a tree
// child node directly connected to another node
// parent converse of a child
// leaf a node with no children
// edge connection between one node and another
// json returns as a tree
// 0,1,2 trees per node
// everything to the left of the parent has to be less



class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
           var current = this.root;
           while(true){
               if(value === current.value) return undefined;
               if(value < current.value){
                   if(current.left === null){
                   current.left = newNode;
                   return this;
               } else {
                   current = current.left;
               }
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
           } 
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }
        } 
    }
    BFS(){
        var data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data; 
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}



// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.lef