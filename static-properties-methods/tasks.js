'use strict'

class Rabbit extends Object {
    static type = 'animal'
    constructor( name ) {
        super()
        this.name = name
    }
}

Rabbit.staticMethod = function (...args) {
    args.forEach(i => console.log(i))
}

const rabbit = new Rabbit( 'Rab' )
//
// console.log( Rabbit.hasOwnProperty( 'name' ) )
//
// console.log( Rabbit.prototype.__proto__ === Object.prototype )
// console.log( Rabbit.__proto__ === Object )
//
// console.log(Object.getOwnPropertyNames({a: 1, b: 2}))
//
// console.dir(Function)

console.log(rabbit)