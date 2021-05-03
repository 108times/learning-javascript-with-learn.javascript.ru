'use strict'


// Tasks

// 1
/*
Function.prototype.defer = function(delay) {
    console.log( this )
    setTimeout( this, delay )
}

const f = () => console.log('Hello!')

 f.defer(2000)

*/

// 2
function f(a, b) {
    console.log( a + b )
}

Function.prototype.defer = function(delay) {
    const fn = this
    return function() {
        setTimeout( () => fn.apply(this,arguments), delay )
    }
}

console.dir(f)

f.defer(1000)(1,2)
