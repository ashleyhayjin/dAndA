
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
        let initalNode = new ListNode(head.val, head.next);
        let newNode = new ListNode(head.next.val, head.next.next);
        if(head.next){
            head.val = head.next.val;
            head.next.val = initalNode.val;
        };
        
        return head;
        
        // let head = new ListNode(1)
        // return head //{1,2}
        //{
        //val: 1, next: null
    // }
        
        
    
    // reversed linkedList     
    };

    console.log(reverseList(new ListNode(1,new ListNode(2))))

    // [1,2]