const basket = {
    grapes: function hello() { return 'hello' },

}

console.log(basket.grapes.hello);


///IMPLEMENTATION HASH TABLES

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key, value) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHash = new HashTable(100);
;

myHash.set('can', 36677)

myHash.set('congo', 353)
const yope = myHash.get('can', 36677)
console.log(myHash.keys());




////CHALLENGE
////FIRST RECURRING ITEM

function recurring(arr, k) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        console.log(map[arr[i]])
        if (map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            map[arr[i]] = arr[i]
        }

    }
}
recurring(['1', '2', '5', '2'])