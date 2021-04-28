"use strict"

const salaries = {
    "John": 100,
    "Pete": 200,
    "Mary": 400
}

function sumSalaries(obj) {
    let sum = 0
    for (let salary of Object.values(obj)) sum += item
    return sum
}

function sumSalaries(obj) {
    return Object.values(obj).reduce((acc,item) => acc + item, 0)
}

console.log(sumSalaries(salaries))



let user = {
    name: "John",
    age: 30,
    [Symbol("id")]:12 
}

function count(obj) {
    let count = 0
    for (let prop in obj) {
        count++
    }
    return count
}

function count(obj) {
    return Object.keys(obj).length
}

// console.log(count(user))
// console.log(Object.getOwnPropertySymbols(user))
// console.log(Reflect.ownKeys(user))

let [firstName, secondName] = `Amir Kadenov`.split(" ")
console.log(firstName, secondName)
let [firstNamee, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(firstNamee, title)
