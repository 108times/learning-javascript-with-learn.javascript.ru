'use strict'

class Animal {}
class Rabbit extends Animal {}
const rabbit = new Rabbit()
console.log( rabbit instanceof Rabbit )
console.log( rabbit instanceof Animal)

function Cat() {}
console.log( new Cat() instanceof Cat )

const arr = [1,2,3]
console.log(arr instanceof Array)


class Fly {
    static [Symbol.hasInstance](obj) {
        if (obj.canFly) return true
    }
}
const fly = {canFly: true}
console.log(fly instanceof Fly)

const objectToString = Object.prototype.toString
let arrr = []
console.log(objectToString.call(true))

let user = {
    [Symbol.toStringTag] : 'User'
}
console.log({}.toString.call(user))


function A(){}
function B(){}

A.prototype = B.prototype

let a = new A()
console.log(a instanceof B)
console.log({}.toString.call(null))
