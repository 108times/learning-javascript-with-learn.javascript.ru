'use strict'

// Tasks

// 1
const dictionary = Object.create(null, {
    toString: {
        value: function() {
        return Object.keys(this).join(',')
        }
    }
})
dictionary.apple = 'Apple'
dictionary.__proto__ = 'test'


let res = []
for (let key in dictionary) {
    res.push(key)
}
console.log(res)


// 2
function Rabbit(name) {
    this.name = name
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name)
}
const rabbit = new Rabbit('Rabbitty')
