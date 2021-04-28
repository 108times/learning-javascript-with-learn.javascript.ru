`use strict`;

// 1
const user = {
    name: "John",
    years: 30
}
const {name, years: age, isAdmin = false} = user
console.log(name, age, isAdmin)

// 2
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 450
};
function topSalary(salaries){
    let max = 0
    let result = null
    for (const [key,value] of Object.entries(salaries)) {
        value > max ? (result = key, max = value) : null
    }
    return result
}

function topSalary(salaries) {
    return Object.entries(salaries).sort((a,b) => b[1] - a[1])[0][0]
}

console.log(topSalary(salaries))

let start = Date.now()
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i
}
let end = Date.now()

console.log(`${end-start} milliseconds`)