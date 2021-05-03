'use strict'

const obj = {}

console.log(obj)

console.log(Object.getPrototypeOf(obj) === Object.prototype)

console.log(obj.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

let arr = [1, 2, 3]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype)
console.log(arr.__proto__.__proto__.__proto__)

function Car(props) {
   this.model = props.model || 'Camry';
   this.manufacturer = props.manufacturer || 'Toyota';
   this.cost = props.cost || '10000$';
   this.year = props.year || 2020;

   this.isTurnedOn = false;
   this.available = props.available || 'true';
   this.amount = props.amount || 100

   this.prototype = {
       __proto__: Array.prototype,
       constructor: Car
   }

}

Car.prototype.turnOn = function() {
    this.isTurnedOn = true
}

Car.prototype.sell = function(purse) {
    purse.push({
        name: `${this.manufacturer} ${this.model}`,
        cost: this.cost
    })
    if (--this.amount === 0) this.available = false
}

const rav4 = new Car({
    model: 'Rav 4',
    manufacturer: 'Toyota',
    year: 2004,
    cost: '7000$'
})
const purse = []
console.log(rav4)
rav4.sell(purse)

String.prototype.show = function() {
    console.log(this)
}

"BOOM".show()

// if (!String.prototype.repeat) {
    String.prototype.repeat = function(n) {
        let arr = new Array(n + 1)
        console.log(arr)
        return arr.join(this)
    }
// }

console.log('Hello'.repeat(4))

{
    let obj = {
        0: 'Hello',
        1: 'World!',
        length: 2
    }
    obj.join = Array.prototype.join
}

