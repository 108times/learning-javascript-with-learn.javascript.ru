"use strict"

const [q, w, e] = [1, 2, 34]
console.log(q,w,e)

const user = {
    name: `Amir`,
    age: 22,
    isAdmin: true,
    hobbies: [`vedanta`,`jyotish`],
    weight: 92,
    roles: {
        isAdmin: false,
        isEditor: true
    }
}
console.log(JSON.stringify(user,null, 2))

function replacer(key, value) {
    return (key === "isAdmin") ? true : value
}

console.log(JSON.stringify(user,replacer,3))
console.log(Date.UTC)

let room = {
    number: 23,
    toJSON: function() {
        return this.number
    }
}

let id = Symbol("id")
const meetUp = {
    [id]: 123,
    title: "Совещание",
    participiants: [{name: "Иванов"}, {name: "Петров"}],
    date: new Date( Date.UTC(2016,10,23) ),
    friends: [1,23,4]
}

room.takenBy = meetUp
meetUp.place = room

console.log(JSON.stringify(meetUp, (key, value) => key === "takenBy" ? undefined : value, 4))
console.log(JSON.stringify([1,2,3,4]))

const json = JSON.stringify(meetUp)
console.log(json)


const userA = {
    name: "Amir",
    age: 22
}
const jsonA = JSON.stringify(userA)
console.log(jsonA)
const anotherObject = JSON.parse(jsonA)
console.log(anotherObject)

room = {
    number: 35
}
const meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Ku"}, {name: "Kyyu"}],
    place: room
}

room.occupiedBy = meetup
meetup.self = meetup


function solution(key, value) {
    console.log(key)
    if (key) {
        console.log(value)
    }
}
console.log(Object.keys(meetup))
let self
console.log(JSON.stringify(meetup, function replacer (key, value) {
    console.log(this)
    console.log(this === value)
    if (key === "") {
        self = value;
        return self
    }
    return (value === self) ? undefined : value
}))


const replacerFunction = (key, value) => {
    if (key === "") return self = value
    return value === self ? undefined : value
}

function myJsonStringify(target, spaces) {
    return JSON.stringify(target, (key,value) => {
        return (key !== "" && value === target) ? undefined : value
    }, spaces)
}

console.log(myJsonStringify(meetup))
