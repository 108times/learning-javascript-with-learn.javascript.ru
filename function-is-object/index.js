'use strict'

function User({
    name,
    age
} = {
    name: "A",
    age: 20
}) {
    this.age = age
    this.name = name
}
console.log(User.name)

function greet() {
    phrase = "Привет";
    if (false) {
        var phrase;
    }
    console.log(phrase)
}

greet()

global.currentUser = {
    name: 'Amir'
}
console.log(global.currentUser)
console.log(currentUser)
console.log( global.Promise )

function Computer({name, companyName}) {
    this.model = name
    this.company = companyName
}
const comp = new Computer({
    name:"Q",
    companyName:'Anon'
})
console.log(comp)

let arr = [function (){}]
console.log(arr[0].name)



function makeCounter() {
    let count = 0
    makeCounter.counter++
    return () => count++
}
makeCounter.counter = 0

const counter = makeCounter()
console.log(makeCounter.counter)
console.log(makeCounter.counter)
console.log(counter(),counter(),counter())


function makeCounter2() {
    function counter() {
        return counter.count++
    }
    counter.count = 0

    return counter
}

const counter2 = makeCounter2()
console.log(counter2())
console.log(counter2())
console.log(counter2())


