// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

//file:///Users/supremeoverlord/Desktop/AlgorithmPractice/exercises/linkedlist/directions.html
class Node {
    //default null if not set
    constructor(data, next = null) {
        //assigning to data property on node
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        //pass new node into link list
        //don't wverwrite data by passing in existing node with this.head
        //this.head = new Node(data, this.head);
        this.insertAt(data, 0);
    }

    size() {
       let counter = 0;
       //get reference ot first node in linkedlist 
       let node = this.head;

       while (node) {
           counter++;
           //look at current node, next property 
           //assigned until null(last property)
           node = node.next;
       }
       return counter;
    }

    getFirst() {
        //return this.head;
        return this.getAt(0);
    }

    getLast() {
    //     //check to see if there is a node
    //     if (!this.head) {
    //         return null;
    //     }

    //     //if node defined, enter for loop
    //    let node = this.head;
    //    while (node) {
    //        //if not defined, return current node
    //        if (!node.next) {
    //            return node;
    //        }
    //        //update to next in chain
    //        //re-enter while loop
    //        node = node.next;
    //    }
    return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    //make head element point to next element
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        //if no nodes
        if (!this.head) {
            return;
        }

        //if length of 1, then will not have next
        if (!this.head.next) {
            //remove head
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            //there are existing nodes in our chain
            last.next = new Node(data);
        } else {
            //the chain is empty
            //no last node, create node, set to head property
            this.head = new Node(data);
        }
    }

    getAt(index) {
        //could delete since we check below
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            //found node at given index
            if (counter === index) {
                return node;
            }

            counter ++;
            //move node reference
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index ===0) {
            //instead of pointing at first element
            //point at next, removing first element effectively
            this.head = this.head.next;
            return;
        }
        //use getAt to find previous node from one trying to remove
        const previous = this.getAt(index - 1);
        //handles corner case of index out of bounds of our linked list
        //or have a next index
        if (!previous || !previous.next) {
            return;
        }
        //leapfrogs node
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        //insert new node with data when list is empty
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        //handling index 0
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        //handling previous element, or if falsy, get last in chain
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next)
        //forms new connection
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    //iterator function, defines generator function with key
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }


}

module.exports = { Node, LinkedList };
