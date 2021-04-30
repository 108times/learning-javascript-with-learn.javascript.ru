'use strict'

const animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name
}

// Rabbit.prototype = animal

const rabbit = new Rabbit('White Rabbit')

console.log( rabbit.eats )

function Dog() {}

console.log( Dog.prototype.constructor == Dog )
console.log( Rabbit.prototype.constructor === Rabbit)



{
    function Rabbit() {}
    Rabbit.prototype = {
        jumps: true,
        constructor: Rabbit
    }

    const rabbit = new Rabbit()
    console.log(rabbit.constructor == Rabbit)
}

// Tasks
// 1
{
    function Rabbit() {}
    Rabbit.prototype = {
        eats: true
    }
    let rabbit = new Rabbit()
    // Rabbit.prototype.eats = false // 1
    // delete rabbit.eats // 2
    delete Rabbit.prototype.eats // 3
    console.log(rabbit.eats)
}

// 2
{
    'use strict'
    console.clear()
    function Computer(name, model) {
        this.name = name
        this.model = model
    }
    const comp1 = new Computer('Apple', 'MacBook')
    console.log(comp1)
    const comp2 = new comp1.constructor('Huawei', 'MateBook')
    console.log(comp2)

    Computer.prototype = {}
    const comp3 = new comp1.constructor('Windows', 'Surface')
    console.log(comp3.name)
}
{
function User(name) {
  this.name = name;
}

User.prototype = {}; // (*)
let user = new User('John');

let user2 = new user.constructor('Pete');

console.log( user2 ); // undefined

}
