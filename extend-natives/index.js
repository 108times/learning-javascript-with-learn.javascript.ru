'use strict'

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0
    }

    static get [Symbol.species]() {
        return Array
    }
}

let arr = new PowerArray(1, 2, 5, 10, 100)
console.log(arr.isEmpty())

let filteredArray = arr.filter( item => item >= 10)
console.dir(filteredArray)
console.log(filteredArray.isEmpty())
console.log(Object.getPrototypeOf(filteredArray) === PowerArray.prototype)
