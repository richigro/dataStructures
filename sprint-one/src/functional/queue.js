var Node = function(val, next=null){
  var someInstance = {};

  someInstance.value = val;
  someInstance.next = next;

  return someInstance;
}

//I will be impleting a Queue with a linked list
//for better dequeing performance compared to an array

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {};
  someInstance.head = null;
  someInstance.tail = null;
  someInstance.sizes = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    //instantiate a new node with the given value
    var node = new Node(value);
    //check to see if the linked list is empty
    if(!someInstance.sizes){
      //if empty set the node equal to the head and the tail
      someInstance.head = node;
      someInstance.tail = node;
    } else {
      //if the list is not empty 
      //set the old tail to be pointing to the new 
      //tail 
      someInstance.tail.next = node;
      //make the someInstance.tail pointer point
      // to the new node
      someInstance.tail = node;
    }
    //increment the size of the queue
    someInstance.sizes++;
    
  };

  someInstance.dequeue = function() {
    var oldHead = someInstance.head;
    //dequeueing from empty queue
    if(!someInstance.sizes){
      //if the queue is currently empty
      console.log("There are no more nodes in the Queue to remove!");
      return 0;
    } else {
      //we are always going to remove from the head
      //keep a reference to of current head
      
      //make our someInstance.head pointer point 
      // to the new head
      someInstance.head = oldHead.next;
    }
    //decrease the count by 1
    someInstance.sizes--;
    //return the value of the node that was removed
    return oldHead.value;
  };

  someInstance.size = function() {
    return someInstance.sizes;
  };

  return someInstance;
};

var myQueue = Queue();

myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(9);
myQueue.dequeue();
console.log(myQueue);
