'use strict'

let sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

let sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
       super.say(`Hi, ${this.name}`)
    },
    sayBye() {
        super.say(`Bye, ${this.name}`)
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

Object.assign(User.prototype, sayHiMixin)

new User('Amir').sayHi()


const eventMixin = {
    /**
     * Subscribe to event, usage:
     * menu.on('select', function (item) {...}
     * */
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {}
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = []
        }
        this._eventHandlers[eventName].push(handler)
    },

    /**
     * Cancel subscription, usage:
     * menu.off('select', handler)
     * */
    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName]
        if (!handlers) return
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1)
            }
        }
    },

    /**
     * Generate event with provided name and data
     * this.trigger('select', data1, data2)
     * */
    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
    }
}

class Menu {
    choose(value) {
        this.trigger('select', value)
    }
}

Object.assign(Menu.prototype, eventMixin)

const menu = new Menu()
console.dir(menu)
menu.on('select', value => console.log(`Выбранное значение: ${value}`))

menu.choose('123')