const strings = ['a', 'b', 'c', 'd'];

//push Adding an item at the end of an array
strings.push('e') //0(1)
//console.log(strings)
//["a", "b", "c", "d", "e"]


//pop Removing the last item at the end of an array
strings.pop() //0(1)
strings.pop() //0(1)
//console.log(strings)
//["a", "b", "c"]


//unshift Ading an item in the begin of an array
strings.unshift('M')//0(n)
//console.log(strings)


//splice
strings.splice(2, 0, 'Milou') //0(n)
//console.log(strings);


/////BUILDING OUR OWN ARRAY!\\\\\\


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++

        return this.data
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
//console.log(newArray);
newArray.push('yo');
//console.log(newArray);
newArray.pop();
//console.log(newArray);
newArray.delete(1);
//console.log(newArray);







/////CHALLENGE
//Create a function that reverse a string:

function reverse(str) {
    return str.split("").reverse().join('');
}
//console.log(reverse('Madesu na nga minene!!'))


////CHALLENGE
//MergeTwoArray
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);