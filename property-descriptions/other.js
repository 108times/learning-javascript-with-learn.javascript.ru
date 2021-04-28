'use strict'
const $text = document.getElementById('text');
function print(text) {
    $text.innerHTML = `<p><pre>${text}</pre></p>` + $text.innerHTML
}
function printProp(obj, propName = 'key') {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propName)
    console.log(descriptor)
    print(JSON.stringify(descriptor, null, 4))
}

function clear() {
    $text.innerHTML = ""
}

function getObjDescriptor(obj) {
    return Object.getOwnPropertyDescriptors(obj)
}


let user = {
    name: "John",
    toString: function() {
        return this.name
    }
}

Object.defineProperty(user, 'toString', {
    enumerable: false
})

Object.defineProperty(user, 'age', {
    value: 20,
    configurable: false
})

Object.defineProperty(user, 'isAdmin', {
    value: false,
    writable: false,
    enumerable: true
})

Object.defineProperty(user, 'knowsJavaScript', {
    value: true,
    writable: false,
    configurable: false,
    enumerable: true
})

const queue = []

for (let prop in user) {
    queue.push(Object.getOwnPropertyDescriptor(user, prop))
}

let timeToFinish
function printQueueWithInterval(queue, interval) {
    timeToFinish = interval * (queue.length + 1)
    setTimeout( () => {
        clear()
    }, timeToFinish)

    -function printItem() {
        const text = JSON.stringify(queue.pop(), null, 6)
        print(text)

        if (queue.length !== 0) {
            setTimeout( () => {
                printItem()
            }, interval)
        }
    }()

}
printQueueWithInterval(queue,1000)

// setTimeout( () => null, timeToFinish)





// getOwnProperties, definePropertyDescriptors

const object = {
    name: 'NAME'
}
Object.defineProperty(object, 'value', {
    value: "<p>Hello world</p>",
    configurable: false,
    writable: true
})
Object.defineProperty(object, 'style', {
    value: {
        color: "white",
        background: "darkgray",
        "font-size": "1.4rem",
        "border-radius": "2rem",
        "padding": "1.5rem"
    },
    configurable: false,
    writable: true
})

const objectCopy = Object.assign({}, object)
const objectCopy2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(object))

const objectCopy3 = {}
for (let prop in object) { objectCopy3[prop] = object[prop] }
console.group('Objects')
console.log('object  ->  (original) ', getObjDescriptor( object) )
console.log('objectCopy  ->  (Object.assing) ', getObjDescriptor( objectCopy) )
console.log('objectCopy2  ->  (Object.defineProperties) ', getObjDescriptor( objectCopy2) )
console.log('objectCopy3  ->  (for in loop) ', getObjDescriptor( objectCopy3) )
console.groupEnd()
