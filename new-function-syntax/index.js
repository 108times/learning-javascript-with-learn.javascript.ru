'use strict';

// new Function syntax
let func = new Function('a', 'b', 'return a+b')
console.log(func(1,2))
let sayHi = new Function('console.log("Hello world!")')
sayHi()
let value = 'not test'
function getFunc() {
    let value = 'test'

    let func = new Function('console.log(value)')

    return func
}
function getFuncDefault() {
    let value = 'test'
    let func = function () {console.log(value)}
    return func
}

function getFuncArrow() {
    let value = 'test'
    let func = () => console.log(value)
    return func
}


getFunc()()
getFuncDefault()()
getFuncArrow()()