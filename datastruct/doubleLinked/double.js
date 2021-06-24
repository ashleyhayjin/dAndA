class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!head) return undefined;
        var poppedNode = this.tail;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            this.pop

        }
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index <0 || index >= this.length) return null;
        if(index <= this.length/2){
            var count =0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        return current;
        } else {
            var count = this.length -1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new DoublyLinkedList();
list.push("Harry");
list.push("Phil");
list.push("Jerry");

console.log(list);