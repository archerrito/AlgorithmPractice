// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        //created, empty root property
        this.root = null
    }

    //accepts function that gets called with each element in tree
    //taking node, removing it, taking its children, placing into array
    traverseBF(fn) {
        //gives element with root node in array
        const arr = [this.root];
        while (arr.length) {
            //will take out first element of array
            //base method
            const node = arr.shift();

            //take nodes children, push into array using spread operator
            arr.push(...node.children);
            //passing first node into iterator function
            fn(node);
        }
    }

    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            //adds elements to front of array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
