class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {

    }
}

const myLinkedList = new LinkedList(10)
const myLinkedList1 = new LinkedList(5)
console.log(myLinkedList1);