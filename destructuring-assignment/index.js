"use strict"

let user = {};
[user.name, user.surname] = "Amir Kadenov".split(" ")
console.log(user);
[user.a, user.b] = "ab";
console.log(user);
[user.one, user.two, user.three] = new Set([1, 2, 3])
console.log(user)

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(name1, name2, rest)

let [fName = "Guest", sName = "Anonymus"] = ["Amir"]
console.log(fName,sName)

let [name3 = "Qwerty", ...rest2] = ["Hello","world","Q"]
console.log(rest2)

const array = [1,2,3,25,100]
const [ae,be,ce,...rest_of_array] = array
console.log(ae,be,ce,rest_of_array)
const obj = {
    name: "Amir",
    age: 22,
    hobbies: ["palmistry", "astrology"],
    work: "Software development"
}
// const {
//     name: n = "Q",
//     age: a = "W",
//     hobbies: h = [],
//     isReady = true
// } = obj
//
// console.log(a,n,h,isReady)

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// }

// let {height: h, width: w, title: t} = { title: "myMenu", height: 250, width:160}
// console.log(h + w + t)
//
// const object = {
//     property: "ProP",
//     one: 1,
//     two: 2,
//     three: 3
// }
// const {property: prop, ...reste} = object
// console.log(prop, reste)

let options = {
    size: {
        width: 500,
        height: 200
    },
    items: ["Apple", "Banana"],
    styles: {
        more: [1, 2]
    },
    extra: true
}

let {
    size: {
        width
    },
    items: [item1],
    title = "Menu",
    styles: {
        more: [i1]
    }
} = options

console.log(item1)
console.log(title, width, i1)

let {items, size} = options
console.log(items, size)

let showMenuOptions = {
    title: "My menu",
    items: ["clock", "case"]
}

function showMenu({
        title = "Untitled",
        width = 200,
        height = 100,
        items : [itm1 = 0, itm2 = 1] = []
} = {}, message = 0, {word = "word"} = {}) {
    console.log(title)
    console.log(width, height)
    console.log(itm2)
    console.log(message)
    console.log(word)
}

showMenu(showMenuOptions,"Hello world", {word:"QEW"})
showMenu()
showMenu({
    title: "Hello world",
    width:2600,
    height:900,
    items: [999, 9999]
},"Q", {word:"P"})