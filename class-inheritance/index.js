'use strict'
class Animal {
    constructor(name) {
        this.name = name
        this.speed = 0
    }

    run(speed) {
        this.speed = speed
        console.log(`${this.name} runs at ${speed}.`)
    }

    stop() {
        this.speed = 0
        console.log(`${this.name} is still`)
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name)
        this.earLength = earLength
    }

    hide() {
        console.log(`${this.name} hides!`)
    }

    stop() {
        console.group('Stop')
        super.stop()
        this.hide()
        console.groupEnd()
    }
}


const rabbit = new Rabbit('White rabbit', 10)
rabbit.run(100)
rabbit.stop()

/*
{
    function f(phrase) {
        return class{
            sayHi() { console.log(phrase) }
        }
    }

    class User extends f('hiii!') {}

    new User.sauHi()
}
*/
