// A data structure that is ordered. Difference between linked list and array is array has an index and linked list consist of nodes
// Each node has a value and a pointer.
// Head is beginning, Tail is the end. You also keep track of the length, not what is in the middle
// one node points to the next one, a skyscraper with no elevators. It cannot take you to the certain floor, you have to take the stairs 
// singly linked lists, each node only connects to one node, next to each other.


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var first = new Node("Hi");

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        // if there is only one item in the list then 
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList()
list.push("Hi");