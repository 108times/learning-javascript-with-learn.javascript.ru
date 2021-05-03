'use stict'

{
    class User {
        constructor(name) {
            this.name = name
        }

        sayHi() {
            console.log(this.name)
        }
    }

    const user = new User('Amir')
    user.sayHi()

    console.log(typeof User)

    console.log(User === User.prototype.constructor)

    console.log(User.prototype.sayHi)

    console.log(Object.getOwnPropertyNames(User.prototype))
}
{
    function User(name) {
        this.name = name
    }
    User.prototype.sayHi = function() {
        console.log(this.name)
    }
    const user = new User('Amir')
    user.sayHi()

}
{
    class User {
        constructor(){}
    }
    // console.log(typeof User)
    // alert(User)
    // User()
}
{
    const alert = function(word){console.log(String(word))}
    // class expression
    const User = class MyClass{
        sayHi() {
            alert(MyClass)
        }
    }
    new User().sayHi()
}
{
    function makeClass(phrase) {
        return class {
            sayHi() {
                console.log(phrase)
            }
        }
    }

    const User = makeClass('Hello!')
    new User().sayHi()
}
{
    class User {
        constructor(name) {
            this.name = name
        }

        get name() {
            return this._name
        }

        set name(newName) {
            // if (newName.length < 4) throw new Error('too short')
            this._name = newName
        }
    }

    const user = new User('Amir')
    console.log(user.name)

    const user2 = new User('')
}
// Task

// 1
{

    function Clock({ template }) {
        let timer;

        function render() {
            let date = new Date()

            let hours = date.getHours()
            if (hours < 10) hours = '0' + hours

            let mins = date.getMinutes()
            if (mins < 10) mins = '0' + mins

            let secs = date.getSeconds()
            if (secs < 10) secs = '0' + secs

            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs)

            console.log(output)
        }

        this.stop = function() {
            clearInterval(timer)
        }

        this.start = function() {
            render()
            timer = setInterval(render, 1000)
        }
    }

    // let clock = new Clock({template: 'h : m : s'})
    // clock.start()
}

{
    class Clock {
        cont = [];
        timer = null;

        get template () {
            return this._template
        }

        set template (newTemplate) {
            this._template = newTemplate
        }

        constructor({template = 'h : m : s'}) {
            this.template = template
        }

        render() {
            const date = new Date()

            let hours = date.getHours()
            if (hours < 10) hours = '0' + hours

            let minutes = date.getMinutes()
            if (minutes < 10) minutes = '0' + minutes

            let seconds = date.getSeconds()
            if (seconds < 10) seconds = '0' + seconds

            let output = this.template
                            .replace('h', hours)
                            .replace('m', minutes)
                            .replace('s', seconds)

            console.log(output)
        }

        start() {
            this.render()
            this.timer = setInterval( this.render.bind(this), 1000)
        }

        stop() {
            clearInterval(this.timer)
        }
    }

    const clock = new Clock({template:' h | m | s'})
    clock.start()
}
