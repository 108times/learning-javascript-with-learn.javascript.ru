'use strict'
let user = {
    value : "Value",
    age: 20,
    name: "Amir"
}
let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

function print(text) {
    $text.innerHTML = `<pre>${text}</pre>`
}

const $text = document.getElementById('text');

$text.innerHTML = `<pre>${JSON.stringify(descriptor, null, 5)}</pre>`

Object.defineProperty(user,"hobbies", {
    value: ['jyotish', 'vedanta', 'ayurveda'],
    writable: true,
    configurable: false
})
Object.defineProperty(user, "name", {
    enumerable: true,
    configurable: truex,
    writable: false
})
descriptor = Object.getOwnPropertyDescriptor(user, "hobbies")

setTimeout(() => {
    Object.defineProperty(user, "name", {
    configurable: false,
    writable: true
    })
    setTimeout(() => {
    let descriptor = Object.getOwnPropertyDescriptor(user, "name")
    print(JSON.stringify(descriptor, null, 5))
    }, 200)

}, 1400)

setTimeout(() => {
    user.name = 'Zhangir'
    let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
    print(JSON.stringify(descriptor, null, 5))
}, 1700)

setTimeout(() => {
    Object.defineProperty(user, 'name', {
        enumerable: false
    })
    user.name = 'Pete'
}, 2300)
