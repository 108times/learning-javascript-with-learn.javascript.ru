'use strict'
console.log(abc)
function Slider() {
    this.imagesUrls = []
    this.currentImageIndex = 0
    this.showPrevBtn = null
    this.showNextBtn = null
}
Slider.prototype.start = function (ellId) {

}

function abc() {
    return console.log("ABC")
}

const execution_context =  {
    outerEnvironment: 'global',
    lexicalEnvironment: null,
    variableEnvironment: null,
    this: this,
}


function person() {
    let name = "Amir";

    return function displayName() {
        console.log(name)
    }
}
let amir = person()
amir()


const lexicalEnvironment = {
    environmentRecord: {
        '<identifier1>' : '<value>',
        '<identifier2>' : '<value>'
    },
    'outer': '<Reference to the parent lexical environment>'
}

function createCounter() {
    let count = 0

    return function () {
        return count++
    }
}

const counter1 = createCounter()
const counter2 = createCounter()

console.log(counter1())
console.log(counter1())

console.log(counter2())
console.log(counter2())

let a = function (r) {
    console.log()
    console.log(r)
}
a(1)