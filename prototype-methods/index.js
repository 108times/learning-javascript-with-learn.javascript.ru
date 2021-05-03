'use strict'
const $output = document.getElementById('output')

function print(text, jsonify = false) {
    if (jsonify) text = JSON.stringify(text, null, 4)
    $output.innerHTML = `<pre>${text}</pre>` + $output.innerHTML
}

const animal = {
    eats: true
}

{
    const rabbit = Object.create(animal)
    console.log(rabbit.eats)
    console.log(Object.getPrototypeOf(rabbit) === animal)

    Object.setPrototypeOf(rabbit, {})
    console.dir(rabbit)

    console.dir(animal)
    print( animal , true)
}

let id = Symbol('id')

const rabbit = Object.create(animal, {
    _jumps: {
        value: true,
        writable: true,
        configurable: false,
        enumerable: false
    },
    jumps: {
        get: function () {
            return this._jumps
        },
        set: function(value) {
            this._jumps = value
        },
        configurable: false
    },

})

rabbit[id] = 123

print(rabbit, true)

const rabbitClone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit))
print(`rabbit === rabbitClone -> ${rabbit === rabbitClone}`)
console.log(rabbitClone.jumps = 'false')

/*let object = {}
let answer
while (answer = prompt('What\'s the key?', '__proto__')) {
    object[answer] = (Math.random() % 100) * 1000
}
console.log(object)
alert(object)
 */

console.log(rabbit.hasOwnProperty('q'))
