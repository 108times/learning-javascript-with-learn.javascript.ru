'use strict'
const $text = document.getElementById('text');
function print(text) {
    $text.innerHTML = `<p><pre>${text}</pre></p>` + $text.innerHTML
}

let user = {
    name: 'John',
    surname: 'Smith',
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName( value ) {
        [this.name, this.surname] = value.split(" ")
    }
}

// console.log(user.fullName)
// user.fullName = 'Hello World'
// console.log(user.fullName)


let user1 = {
    name: 'Amir',
    surname: 'K'
}

Object.defineProperty(user1, 'fullName', {
    set(value) {
        [this.name, this.surname] = value.split(" ")
    },
    get() {
        return `${this.name} ${this.surname}`
    },
    configurable: false,
    enumerable: true
})
// console.log(user1.fullName)
// user1.fullName = 'Amiraliosman Kd'
// console.log(user1.fullName)

{
    let user = {
        get name() {
            return this._name
        },
        set name(value) {
            if (value.length < 4) {
                return console.error('New name is too short!')
            }
            this._name = value
        }
    }

    user.name = 'Peter'
    user.name = 'Pet'
    console.log(user.name)
}

{
    function User(name, birthday) {
        this.name = name,
        this.birthday = birthday,
        console.log('QWE'),
        Object.defineProperty(this, 'age', {
            get() {
                const yearToday = new Date().getFullYear()
                return  yearToday - this.birthday.getFullYear()
            }
        })
    }
    let user = new User('JOHN', new Date(1992, 6, 1))
    console.log(user.age)
}
