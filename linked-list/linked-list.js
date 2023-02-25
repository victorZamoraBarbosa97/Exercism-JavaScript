class node {
  constructor( value ){
    this.value =  value;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  constructor (){
    this.head = null;
    this.end = null;
    this.length = 0;
  }
  
  push( value ) {
    const newNode = new node(value);
    if( !this.head ){
      this.head = newNode
      this.end = newNode
    }else{
      newNode.previous = this.end
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
  }

  pop() {
    if( !this.head) return null;
    const removedNode = this.end.value;
    if( this.head === this.end ){
      this.head = null;
      this.end = null;
    }else{
      this.end = this.end.previous;
      this.end.nex = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if( !this.head ) return null;
    const removedNode = this.head.value;
    if( this.head === this.end ){
      this.head = null;
      this.end = null;
    }else{
      this.head = this.head.next;
    }
    this.length--;
    return removedNode;
  }

  unshift( value ) {
    const  newNode = new node(value);
    if(!this.head){
      this.head = newNode;
      this.previous = newNode;
    }else{
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if( value === this.head.value) return this.shift()
    if( value === this.end.value) return this.pop()
    let actual = this.head;

    while( actual ){
      if (actual.value === value){
        actual.previous.next = actual.next;
        actual.next.previous = actual.previous;
        this.length--;
        break;
      }else{
        actual = actual.next;
      }
    }
  }

  count() {
    return this.length;
  }
}
