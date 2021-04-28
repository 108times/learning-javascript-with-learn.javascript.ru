"use strict"

/***
 * Tasks
 * 1
 * */

function makeCounter() {
    let count = 0

    return function() {
        return count++
    }
}

let counter = makeCounter()
let counter2 = makeCounter()

console.log(counter())
console.log(counter())

console.log(counter2())
console.log(counter2())



/***
 * Tasks
 * 2
 * */
function Counter() {
    let count = 0

    this.up = function() {
        return ++count
    }

    this.down = function() {
        return --count
    }
}

counter = new Counter()

console.log(counter.up())
console.log(counter.down())
console.log(counter.down())
console.log(counter.up())


/***
 * Tasks
 * 3
 * */
let phrase = "Hello"

if (true) {
    let user = "John"

    function sayHi() {
        console.log(`${phrase}, ${user}`)
    }
}

/***
 * Tasks
 * 4
 * */
function sum(a) {
    return function (b) {
        return a + b
    }
}
console.log(sum(5)(4))
console.log(sum(5)(-1))

/***
 * Tasks
 * 5
 * */
// Array.prototype.inBeetwen = function(a, b) {
//     return this.filter( item => item >= a && item <= b )
// }
//
// Array.prototype.inArray = function(args) {
//
//     return this.filter(item => args.includes(item))
// }
function inBeetwen(a,b) {
    return function (item) {
        return (item >= a) && (item <= b)
    }
}

function inArray(arr) {
    return function (item) {
        return arr.includes(item)
    }
}

let arr = [1,2,3,4,5,6,6,7]
console.log(arr.filter(inArray([1,2,3,10])))
console.log(arr.filter(inBeetwen(3,6)))


/***
 * Tasks
 * 6
 * */
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function print(obj, prop = "name") {
    for (let item of Object.values(obj)) console.log(item[prop])
}
function getNames(arr) {
    return arr.map(item => item.name)
}

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}

console.log(getNames(users.sort(byField("surname"))))
console.log(getNames(users.sort(byField("name"))))
console.log(getNames(users.sort(byField("age"))))


/***
 * Tasks
 * 7
 */
function makeArmy() {
    const shooters = []

    let i = 0
    while(i < 10) {
        let j = i
        const shooter = function () {
            return j
        }
        i++
        shooters.push(shooter)
    }

    return shooters
}

function makeArmy() {
    const shooters = []

    let i = 0
    while(i < 10) {
        shooters.push(
            function(i) {
                return () => i
            }(i)
        )
        i++
    }
    return shooters
}


const army = makeArmy()
console.log(army[0]())
console.log(army[1]())
console.log(army[3]())

function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}`
    }
}
const hello = createGreeting("Hello")
console.log(hello("Amir"))

console.log(army[6]())



// <lexical scope> //
const a = 'global'

function outer() {
    const b = 'outer'

    function inner() {
        const c = 'inner'
        console.log(c)
        console.log(b)
        console.log(a)
    }
    console.log(a)
    console.log(b)
    inner()
}

outer()
console.log(a)
// </lexical scope> //

// const univer = {
//     "социология": 5,
//     "этика": 4,
//     "философия": 2
// }

// univer['физика'] = 5
// univer.химия = 5
// console.log(univer)


// const univerResult = [3, 4, 5]
// univerResult[0] = 5
// console.log(univerResult)

// // Import Export
function createCounter() {
    let count = 0
    return function() {
        return count++
    }
}

function stringifyStyles(styles) {
    const keys = Object.keys(styles)
    return keys.map( key => `${key}: ${styles[key]}`).join(",")
}

const buttonOptions = {
    styles: {
        width: '400px',
        height: '150px',
        bgColor: 'black',
        color: 'white',
        fontSize: '1.4rem',
        letterSpacing: '2px',
        textTransform: 'uppercase'
    },
    onClick: event => {

    }
}

function createButton({
  styles : {
      width = "100%"
  },
  event = e => e,

}) {
    const formattedStyles = stringifyStyles(styles)

}
console.log(stringifyStyles(buttonOptions.style))
