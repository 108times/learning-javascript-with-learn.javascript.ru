'use strict'


// Tasks

// 1
class Animal {
    constructor(name) {
        this.name = name
    }
}

class Rabbit extends Animal{
    constructor(name) {
        super(name)
        this.created = Date.now()
    }
}

const rabbit = new Rabbit('White Rabbit')
console.log(rabbit.name)

// 2

const cl = new ExtendedClock({
    template: 'h - m - s',
    precision: 600
})
console.dir(cl)
cl.start()