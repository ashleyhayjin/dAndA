
// * Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    //    Receiving an input of head which is a linked list
        if(!head) return head;
    //     Make your val set to next  
    //     make your next set to val
    // if there is no next, then that last node is the tail
        let prevNode = null;
        let currentNode = new ListNode(head.val, head.next);
        if(currentNode != null){
            let nextTemp = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextTemp
        };
        
        return prevNode;
        
        // let head = new ListNode(1)
        // return head //{1,2}
        //{
        //val: 1, next: null
    // }
        
        
    
    // reversed linkedList     
    };

    console.log(reverseList(new ListNode(1,new ListNode(2))))

    // [1,2]