"use strict"

const a = [1, 2, 3]
const a1 = ["a","b","c"]
const [b,c,d] = a

function f(a,b,...args) {
    console.log(args)
}

f(...a, ...a1)

function createCounter() {
    let count = 0
    return function () {
        return count++
    }
}

const counter = createCounter()
const counterr = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

console.log(counterr())
console.log(counterr())
console.log(counterr())
console.log(counterr())

let global = 'global'
function start() {
    let outer = 'outer'

    function inner() {
        let inn = 'inner'
        console.log(inn)
        console.log(outer)
        console.log(global)
    }
    // console.log(inn)
    console.log(outer)
    console.log(global)
    inner()
}
start()
// console.log(inn)
// console.log(outer)
console.log(global)

const App = () => {
    return `
        ${start()}
    `
}

function generateRandomLetters(range = 100) {
    const amount = Math.floor((Math.random() * Date.now()) % range);
    const letters = [];
    for (let i = 0; i < amount; i++) {
        const letter = Math.floor((Math.random() * Date.now()) % 122 + 25)
        letters.push(String.fromCodePoint(letter))
    }
    console.log(letters)
    return letters.join("")
}


function createCounter() {
    let count = 0
    return () => count++
}

const counter = createCounter()
console.log(counter())

console.log(generateRandomLetters(100))

console.log(App())
