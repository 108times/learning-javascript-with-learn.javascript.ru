"use strict"

// const output = document.querySelector(".output")

const iterable = {
    from: 1,
    to: 10
}

iterable[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last
            ? { done: false, value: this.current++}
            : { done: true }
        }
    }
}
for (let item of iterable) {
    console.log( Math.pow(item,3))
}

const arr = [1,1,2,2,2,3,4,5,5,5,23,24,2,23,232,32,32,232]
function removeDuplicates (arr) {
    return arr.filter( (item,i) => arr.indexOf(item) === i ).sort( (a, b) => b - a)
}
Array.prototype.removeDuplicates = removeDuplicates
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr.concat([1,2,3,3333,3223])))

// output.style.display = "flex"
// output.style.flexDirection = "row"
// output.style.flexWrap = "wrap"
// arr.forEach( item => output.insertAdjacentHTML("afterbegin",`<p style="border:1px solid; padding: 1rem; width: 5rem">${item}</p>`))

const arrayLike = {
    0: "Hello World",
    1: "I'm Amiraliosman",
    2: "How are you",
    length:2
}
let arraay = Array.from(arrayLike)
console.log(arraay)
console.log(arraay.pop())
console.log(arraay = Array.from(iterable))
console.log(arraay = Array.from(iterable, function( item, index, arr) {
    return item 
    + parseInt(Date.now()%15*Math.random()) 
    + " " 
    + this[Math.round((Math.random()*1000000000)%2)].replace("'", "")
}, arrayLike))
