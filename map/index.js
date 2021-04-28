"use strict"

const amir = {name: "Amir"}
let map = new Map()
map.set(0, 10)
console.log(map)
console.log(map.set(1, "truet"))
console.log(map.set("1", 122))
console.log(map.get(1))
console.log(map.has(0))
console.log(map)
console.log(map)


let visitsCountMap = new Map().set(amir,125)
console.log(visitsCountMap)
console.log(visitsCountMap.entries())

const obj = new Object({
    name: "Amir",
    age: 21,
    hobby: "vedic astrology",
    // greet: function () {
    //     console.log(`Hello! My name is ${this.name}, I'm ${this.age} years old! I'm interested in ${this.hobby}`)
    // },
    // [Symbol.iterator]: function() {
    //     return {
    //         current: 1,
    //         last: this.age,
    //         next() {
    //             this.current <= this.last
    //             ? { done: false, value: this.current++}
    //             : { done: true }
    //         }
    //     }
    // }
})
let e
console.log(e = [1,"q",2,3].entries())
for (let item of e) {
    console.log(item)
}

const myMap = new Map([
    [1,"My"],
    [2,"name"],
    [3,"is"],
    [4,"Amir"]
])
console.log(myMap.set(5,"Ali"))
console.log(myMap.set(6,"Osman"))
console.log(myMap.entries().next())
let res = ""
myMap.forEach(function (value, key, m) {
    // console.log(`${key} => ${value}`)
    res += value
})
console.log(res)

const arr = [
    ["a", "aValue"],
    ["b", "bValue"],
    ["c", "cValue"]
]
console.log(new Map(arr))



const charList = ['a','o','i','e','u']

function disemvowel() {
  return this
          .split("")
          .map(item => charList.find( char => char.toLowerCase() === item ) ? "" : item)
          .join("")
}
String.prototype.disemvowel = disemvowel
console.log(
`This website
is for losers LOL!`
.disemvowel())

console.log("Z".codePointAt())
console.log("A".codePointAt())
console.log("z".codePointAt())
console.log("a".codePointAt())
console.log(String.fromCodePoint(90))

function createAlphabetList () {
    const lowerList = []
    const upperList = []
    for (let i = 1, upper = 65, lower = 97; i<=25; i++) {
        if (lower <= 122) lowerList.push(String.fromCodePoint(lower++))
    }
    return [].concat(upperList, lowerList)
}

function isPangram(str) {
    const charList = createAlphabetList()
    str.split("").forEach( (item, i) => {
        if (!charList.indexOf(item)) {
            charList.splice(i--,1)
        }
    })
    return !charList.length
}

console.log(isPangram("Hello world !"))

const recipeMap = new Map([
    ["огурец", 500],
    ["салат", 300],
    ["помидор", 400],
    ["лук", 100]
])
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable)
}
for (let vegetable of recipeMap.values()) {
    console.log(vegetable)
}
for (let entry of recipeMap) {
    console.log(entry)
}

// object to map
const object = {
    name: "Amir",
    age: 22,
    isFat: false,
    knowsJavaScript: true,
    date: `01.06.2020`
}
const createdMap = new Map(Object.entries(object))
console.log(createdMap)
console.log(Object.fromEntries(createdMap.entries()))

function mEntries(obj) {
    const result = []
    for (let key in object) {
        result.push([key, object[key]])
    }
    return result
}
function mFromEntries(arr) {
    const result = {}
    arr.forEach((item,i) => result[item[0]] = item[1] )
    return result
}
let rr; console.log( rr = mEntries(object))
console.log( mFromEntries(rr))

function bubbleSort(arr) {
    console.log(arguments)
    for( let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ( arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([24,11,300,40,0]))
console.log([24,11,300,40,0].sort())
console.log(`Hello world`.split("").map(item => item.codePointAt()).join("-"))

// mapp to object
const mapp = new Map()
mapp.set("tomato",2)
mapp.set("pineapple", 2)
mapp.set("banana", 4)
console.log(mapp.set("banana", 2))
console.log(Object.fromEntries(mapp)) // make a plain object
globalThis.console.log("hello world!")

let set = new Set()
console.log(set)
console.log(set.add("1"))
console.log(set.add(1))
console.log(set.size)
console.log(set.has(1))
console.log(set.delete(1))
console.log(set.clear())

console.log(set.add({name: "Amir", age:22}))
console.log(set.add({name: "Zhangir", age:17}))
console.log(set.add({name: "Amina", age:15}))
console.log(set.add({name: "Zhangir", age:18}))

console.log(Array.from(set.entries()))

function unique(arr) {
    return Array.from(new Set(arr))
}
console.log(unique(["Hare", "Krishna", "Hare", "Krishna", "Krishna","Krishna","Hare","Hare",":-O"]))

function aclean(arr) {
    const codes = new Set(arr.map( item => {
        return {value: (item.toLowerCase().split("").map(char => char.codePointAt()).sort().join(",")),origin:item}
    }))
    console.log(codes)
    // return Array.from(codes).map(item => item.split(",").map(char => String.fromCodePoint(char)).join(""))
    return
}
function getCodesSum (item) {
    return item.toLowerCase().split( "" ).reduce( ( acc, char ) => char.codePointAt() + acc, 0 );
}

function aclean(arr) {
    const map = new Map()
        arr.forEach(item => {
            const codesSum = getCodesSum(item)
            /* if (!map.has(codesSum)) */ map.set(codesSum, item)
        })
    return Array.from(map.values())
}
function aclean2(arr) {
    const obj = {}
        arr.forEach( item => {
            const sortedLetters = item
                                    .toLowerCase()
                                    .split("")
                                    .sort()
                                    .join("")
            obj[sortedLetters] = item
        })
    return Object.values(obj)
}

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares","nap"];
console.log(aclean(array))
console.log(aclean2(array))

const users = [
    { name:"Amir", age: 22},
    { name:"Vasiliy", age: 50},
    { name:"Ivan", age: 35}
]
map = new Map()
users.forEach( (item, i, arr) => map.set(item, Math.random().toFixed(2)* 100 % 25))
console.log(map)
const user = new Object({ name: "Q", age: 100})
console.log(map.set(user, 100))

function print(iterator) {
    const result = []
    for (let item of iterator) {
        result.push(item)
    }
    return result
}

map = new Map()

map.set("name", "John")

let keys = Array.from(map.keys())
console.log(print(keys))
keys = Array.from(keys)
console.log(keys.push("more"))
console.log(keys)
8
visitsCountMap = new WeakMap()

function countUser(user) {
    let count = visitsCountMap.get(user) || 0
    visitsCountMap.set(user, count + 1)
    return visitsCountMap
}

countUser(user); countUser(user); countUser(user)
countUser(user)
console.log(visitsCountMap.get(user))


//cache
let cache = new WeakMap()

function process(obj) {
    if (!cache.has(obj)) {
        let result = obj /* some actions with obj */
        cache.set(obj, result)
    }
    return cache.get(obj)
}


let visited = new WeakSet()

let aamir = { name: 'Amir'}
let zhangir = { name: 'Zhangir'}
let amina = { name: 'Amina'}

visited.add(aamir).add(zhangir).add(amina)
visited[1] = "q"
console.log(visited)

// Tasks
// 1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]
let message = {text: "Hi", from: "Kalleb"}

const readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])
readMessages.add(message)

console.log(readMessages.has(messages[2]))
console.log(readMessages.has(message))

