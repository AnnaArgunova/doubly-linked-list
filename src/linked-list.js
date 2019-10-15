const Node = require('./node');

class LinkedList {
  constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
}



append(data) {
  
  if (this.length === 0){
    this._head = new Node(data);
    this._tail = this._head;
    } else {
      let counter = this._head;
      
      while(counter.next){
        counter = counter.next;
      }
      
      counter.next = new Node(data);
      
      this._tail = counter.next;

    }
    this.length++;
   return this;
 }

 head() {
   
   return this._head.data;
 }

 tail() {
  
   return this._tail.data;
 }

  at(index) {

    if(index < 0 || this.length < index){
      return false;
    }

      let counter = this._head;
      
      let i = 0;

      while(i <= index){
        this.prev = counter;
        counter = counter.next;
        if(i === index){
         return this.prev.data;
        }
        i++;
      
    }
     
    
  }

  insertAt(index, data) {

    if(index < 0 || this.length < index){
      return false;
    }

    let node = new Node(data);

    if(index === 0){
      node.next = this._head;
      this._head = node;
    } else if  (index === this.length){
      this._tail = node;  
      }   else {
      let counter = this._head;
      
      let i = 0;

      while(i < index){
        this.prev = counter;
        counter = counter.next;
        i++;
      }
   

      this.prev.next = node;
      node.next = counter;
      
    }

    

    this.length++;
return this;
  }

  isEmpty() {}

  clear() {}

  deleteAt(index) {

    if (index < 0 || this.length <= index){
      return false;
    }

    let counter = this.head;

    if(index === 0){
      this.head = counter.next;
    } else {
      let prev =null;
      let i = 0;
      
      while(i < index){
        prev = counter;
        counter = counter.next;
        i++;
      }

      prev.next = counter.next;

    }

    this.length--;
    return counter.data;
  }

  reverse() {}

  indexOf(data) {}
}



module.exports = LinkedList;
