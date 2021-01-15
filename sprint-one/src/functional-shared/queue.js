const { _ } = require("../../../lib/underscore/underscore");

var Node = function(val, next=null){
  var someInstance = {};

  someInstance.value = val;
  someInstance.next = next;

  return someInstance;
}

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.sizeOfQueue = 0;
  someInstance.head = null;
  someInstance.tail = null;

 _.extend(someInstance, Queue.queueMethods);

  return someInstance;
};

Queue.queueMethods = {
  enqueue: function(value){
    //create a node with the value
    var node = new Node(value);
    //check to see if queue is empty
    if(!this.sizeOfQueue){
      //assign the first node to be the head and 
      // also the tail of the node 
      this.tail = node;
      this.head =node;
    } else {
      //if its not empty
      //add from the tail
      //The next pointer from the tail should point
      // to the new node that will be a tail
      this.tail.next = node;
      //re-assign the new tail to be the new node
      this.tail = node;
    }
    //increment the size of the queue by 1
    this.sizeOfQueue++;

  },
  dequeue: function(){
    //since we always remove from the head node 
    // store it to then return it
    var oldHead = this.head;

    //if the current Queue is empty
    if(!this.sizeOfQueue){
      //then there are no more nodes to remove from queue
      return undefined;
    } else {
      //if there are nodes change the current head 
      //to the head's next pointer
      this.head = this.head.next;
    }
    //decrement the size of the queue
    this.sizeOfQueue--;
    //return the value of the deleted node
    return oldHead.value;
  },
  size: function(){
    return this.sizeOfQueue;
  }
};


