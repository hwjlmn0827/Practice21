//ByteDance
//todo
function Node(v) {
  this.value = v;
  this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;


function printLinkList(head) {
  console.log(head.value);
  if (head.next) {
     printLinkList(head.next);
  }
}


function reverseLinkList(head) {
  // implement this
}

printLinkList(reverseLinkList(n1)); // 5 4 3 2 1