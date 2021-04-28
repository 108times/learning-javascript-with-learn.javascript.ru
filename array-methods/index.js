"use strict"
console.log("Hello world!")

const func = arr =>  {
    let sum = 0
    let tempSum
    for (let i = 0; i < arr.length; i++) {
        tempSum = arr[i]
        if (sum < tempSum) sum = tempSum
        for (let j = i + 1; j < arr.length; j++) {
            tempSum += arr[j]
            if (sum < tempSum ) sum = tempSum
        }
    }
    return sum
}

console.log(func([1,2,3]))
console.log(func([2,-1,2,3,-9]))
console.log(func([100,-5,-3]))
console.log(func([2,24,4,-100]))

let array = []

//splice
array = [1,2,3,4,10]
array.splice(-1,0,5,6,7,8,9)
console.log(array)
array.splice(0,0,-5,-4,-3,-2,-1,0)
console.log(array)

//slice
array = ["a","p",'p','l','e']
console.log(array.slice(0,8))
console.log(array)

//concat
array = [1,2]
console.log(array.concat([3,4],[5,6]))
console.log(array.concat(3,4,[5,6,7,-6]))

let arrayLike = {
    0:"q",
    1:"w",
    2:"e",
    3:"r",
    length: 4,
    [Symbol.isConcatSpreadable]: true
}
array = array.concat(arrayLike)
console.log(array)
console.log(arrayLike[Symbol.isConcatSpreadable])

//forEach
array.forEach((element, index, arrayName) => {
    console.log(arrayName[index], element)
})
array.forEach(function(el, i, pseudo) {
    console.log(`#${i} -> ${pseudo[i]} === ${el}`)
}, arrayLike)
array = ["Бильбо","Гендальф","Назгул"]
array.forEach( (item, index, array) => {
    console.log(`${item} имеет позицию ${index} в массиве array`)
})


//indexOf, lastIndexOf, includes
array = [1, 2, 24, 101, 0, 52, 524, 52, 7]
console.log(array.includes(101))
console.log(array.indexOf(101))
console.log(array.lastIndexOf(52))
array = [NaN, 100]
console.log( array.includes(NaN) )
console.log( array.indexOf(NaN) )

//find, findIndex
let users = [
    {id: 1, name: "Amir", salary: 10000},
    {id: 2, name: "Ali", salary: 12000},
    {id: 3, name: "Osman", salary: 100000}
]
let user = users.find( function (item,id,arr) {
    return item.id === 1 || item.name === "Ali"
} )
console.log(user)
console.log(users.findIndex( item => item.name === "Ali"))

//filter
console.log(users.filter(item => item.salary > 70000 && item.id > 2))
console.log(users.filter(function(item, index, arr) {
    return item.id != 2 && item.name != "Amir" && item.salary > 12000
}).length)

//map
let lengths = ["Bilbo", "Gandalf","Nazgul","Sauron"]
console.log(lengths.map( item => item.length))
console.log(lengths.map( item => item.codePointAt()))

//sort
array = [1,2,15]
const compare = function (a, b) {
    console.log(`${a} <> ${b}`)
    return
    a > b ? 1
    : a < b ? -1
    : 0;
}
console.log(array.sort(compare))

//reverse
console.log(array.reverse())

//split & join
let names = "Amir, Zhangir, Amina"
array = names.split(",")
console.log(array)
array = array.map( i => {
    console.log(i[i.length - 1])
    return i.includes(" ") ? i.substring(i.indexOf(" ")+1,i.length) : i
}).join(";")
console.log(array)

//reduce
array = [12,41,1,24,54,65,2]
console.log(array.reduce( (sum, item)=> sum + item))
array = []
console.log(array.reduce((sum,item) => item + sum, 1))

//Array.isArray(arr)
console.log(typeof([]))
console.log(typeof {})

//thisArg
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return this.minAge >= user.age && this.maxAge > user.age
    }
}
users = [
    {age: 20},
    {age: 21},
    {age: 27},
    {age: 12},
    {age: 16},
]
console.log(users.filter(army.canJoin, army))
console.log(users.filter( item => army.canJoin(item) ) )
console.log(users.every( item=>item.age>=12))
console.log(users.some( item => item.age === 11))

function includes100(arr) {
    return arr.some( item => item.age === 100)
}
array.push({age:100})
console.log(includes100(array))

//isArray
array = [1,2,100,"a",{}]
let obj = {}
console.log(Array.isArray(array))
console.log(Array.isArray(obj))

// flat, some/every
array = [1,[7,[3]],,5]
array = array.flat(Infinity)
console.log(array)
console.log(array.some( item => item === 5))
console.log(array.every(item => item % 2 !== 0))
// copyWithin
array = [1,2,3,4,5,6,7]
console.log(array.copyWithin(3,2,5 ))

// taks

// 1
function camelize( str ) {
    let pos
    while( (pos = str.indexOf("-")) !== -1) {
        str = str.slice(0, pos) + str[pos+1].toUpperCase() + str.slice(pos+2)
    }
    return str
}

function camelize( str ) {
    return str.split("-")
    .map( (item, index) => index !== 0 ? item[0].toUpperCase() + item.slice(1) : item)
    .join("")
}
console.log(camelize("my-short-string"))
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

// 2
array = [1,2,3,4,5,67,7,92]
function filterRange ( a, b ,thisArg = this) {
    let result = []
    thisArg.forEach( item => {
        item >= a && item <= b
        ? result.push(item) : 0
    })
    return result
}

function filterRange2( a, b, thisArg = this) {
    return thisArg.filter( item => item >= a && item <= b)
}


// console.log(array.filterRange(5,92))
// array = [5,3,8,1]
// console.log(array.filterRange2(1,4))
// console.log(array)


// 3

function filterRangeInPlace(arr, a, b) {
let temp
   for (let i = 0; i < arr.length; i++) {
       if ( arr[i] < a || arr[i] > b ) {

           arr.splice(i,1)
           i--
       }
   }

}



console.log(array)
console.log(filterRangeInPlace(array,2,8))
console.log(array)


array = [1,2,3,4,5,67,7,92]
filterRangeInPlace(array, 1, 2 )
console.log(array)

// 4
array = [1,2,3,4,5,67,7,92]
function reverseSort(arr) {

    arr.sort((a, b) => {console.log(`${a} < ${b}`);return b - a})
}
reverseSort(array)
console.log(array)

//5
array = ["HTML","JavaScript","CSS"]
function copyAndSort(arr) {
    return arr.slice().sort()
}

console.log(copyAndSort(array))
console.log(array)



// 6
function Calculator_() {

    this.methods = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b
    }

    this.calculate = function(str) {
        const split = str.split(" ")
        const a = split[0]
        const op = split[1]
        const b = split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN
        }
        return this.methods[op](a, b)
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}

function Calculator() {
    this.operators = [
        { name: "+", func: (a,b) => +a + +b },
        { name: "-", func: (a,b) => +a - +b }
    ]
    this.calculate = function(str) {
        const arr = str.split(" ")
        const item = this.operators.find( item => item.name === arr[1] )
        return item && item.func ? item.func(arr[0], arr[2]) : NaN
    }
    this.addMethod = function (name, func) {
       this.operators.push({name,func})
    }
}

const powerCalc = new Calculator()
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)
powerCalc.addMethod("||", (a, b) => a || b)
console.log(powerCalc.calculate("1 + 2"))
console.log(powerCalc.calculate("3 * 8"))
console.log(powerCalc.calculate("5 ** 5"))
console.log(powerCalc.calculate("90 / 10"))
console.log(powerCalc.calculate("NaN && undefined"))


// 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
users = [ vasya, petya, masha ];

function usersToNamesArray(arr) {
    return arr.map( item => item.name )
}
console.log(usersToNamesArray(users))


//8
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

function mapUsers(users) {
    return users.map( item => {
        return {
            fullName: `${item.name} ${item.surname}`,
            id: item.id
        }
    })
}
console.log(users)
console.log(mapUsers(users))



//9
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

users = [ vasya, petya, masha ];

let sortByAge = users => {
    return users.map(item => item.age).sort().map( (el) => {
        let user = users.find(item => item.age === el)
        return {
            name: user.name,
            age: el
        }
    })
}

sortByAge = users => users.sort( (item, nextItem) => item.age > nextItem.age ? 1: -1 )
console.log(sortByAge(users))



// 10
function shuffle(arr) {
    arr.forEach( function(item, index, array) {
        const rand = parseInt((Math.random() * 100000 * item) % array.length)

        let temp = array[rand]
        array[rand] = item
        array[index] = temp
    })
    return arr
}
function shuffle(arr) {
   return arr.sort( () => Math.random() - 0.5)
}

let arr = [1,2,3]
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))
console.log(shuffle( arr ))

let count = []
for ( let i = 0; i< 1000000; i++) {
    let array = [1,2,3]
    shuffle(array)
    const index = array.join("")
    count[index] !== undefined
    ? count[index] ++
    : count[index] = 1
}

count.forEach( (item,index,arr) => {
    console.log(`${index}: ${item}`)
})



//11
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

function getAverageAge( users ) {
    return users.reduce((acc, item) => item.age + acc, 0) / users.length
}

console.log(getAverageAge( arr ))



//12
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
function unique( arr ) {
    return Array.from(new Set(arr))
}
function unique( arr) {
    let result = []
    arr.forEach( (item, index) => !result.includes(item) ? result.push(item) : 0 )
    return result
}
function unique( arr) {
    return arr.filter( (item, index) => arr.indexOf(item) === index)
}
console.log(unique(strings))


// Symbol.iterator
let range = {
    from: 1,
    to: 6
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return (this.current <= this.last)
            ? { done: false, value: this.current++}
            : { done: true}
        }
    }
}

range = {
    from: 0,
    to: 7,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++}
        } else {
            return { done: true}
        }
    }
}
for (let num of range) {
    console.log( num )
}

obj = {
    1: "myName",
    2: "is",
    3: "Amir",
    length: 4
}
console.log(Array.from(obj))
console.log(Array.from(obj).filter( item => !(item === undefined)).join(" "))

console.log("Hello world!")
