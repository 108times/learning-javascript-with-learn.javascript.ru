'use strict'
const $output = document.getElementById('output')
function print({value, convertToJSON = false, description} = {}) {
    if (Array.isArray(value)) {
        value = value.map( item => JSON.stringify(item, null, 4)).join("<hr/>")
    } else {
        value = convertToJSON ? JSON.stringify(value, null, 4) : value
    }
    description = description ? `<h4 style='padding:1rem 0; margin: 0'>${description}</h4>` : ''
    $output.innerHTML = `<pre>${description}${value}</pre>` + $output.innerHTML
}
{
    const animal = {
        eats: true,
        walk: function () {
            print({value: (this.name ? this.name : 'Animal') + ' walk'})
        }
    }

    const rabbit = {
        name: 'rabbit',
        jumps: true,
        __proto__: animal,
        walk: function () {
            print({value: 'Rabbit! Bounce-bounce!',description:'Bouncing rabbit...'})
        }
    }

    const longEar = {
        name: 'longEar',
        earLength: 10,
        __proto__: rabbit
    }

    longEar.walk()
    print({value: longEar.__proto__.name})
}

const user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name,this.surname] = value.split(" ")
    },
    get fullName() {
        return `${this.name} ${this.surname}`
    }
}
const admin = {
    __proto__: user,
    isAdmin: true
}

print({value: admin.fullName,description:'isAdmin -> ' + admin.isAdmin})
print({value:`${admin.name}(admin.name) | ${admin.__proto__.name}(admin.__proto__.name)`, description: 'Before reassigning'})
admin.fullName = 'Amir Kadenov'

print({value:`${admin.name} ${admin.surname}(admin) | ${admin.__proto__.name} ${admin.__proto__.surname} (admin.__proto__)`, description: 'After reassigning'})

const animal = {
    walk : function() {
        if (!this.isSleeping) {
            print({value:`I walk`,description: `${this.name ?? ''} walk...`})
        }
    },
    sleep : function() {
        this.isSleeping = true
    }
}

const rabbit = {
    __proto__ : animal,
    name: 'White Rabbit'
}

rabbit.walk()
rabbit.isSleeping = true
console.log(rabbit.isSleeping)
console.log(animal.isSleeping)

print({value: Object.keys(rabbit)})
{
    let arr = []
    for (let prop in rabbit)  {
        let ownership = 'Inherited'
        if (rabbit.hasOwnProperty(prop)) ownership = 'Own'

        arr.push(`[${ownership}] ${prop} -> ${rabbit[prop]}`)
    }

    print({value: arr})
}

// Tasks

// 1

{
    const animal = {
        jumps : null
    }
    const rabbit = {
        __proto__ : animal,
        jumps : true
    }

    // alert(rabbit.jumps)
    // delete rabbit.jumps
    // alert(rabbit.jumps)
    // delete rabbit.jumps
    // alert(rabbit.jumps)

}

// 2

{
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000
    };
    Object.setPrototypeOf(pockets, bed)
    // print({value: pockets.glasses})
    // print({value: pockets.pen})
    // print({value: bed.pen})
}

//3

{
    const animal = {
        eat() {
            this.full = true
        }
    }
    const rabbit = {
        __proto__: animal
    }
    rabbit.eat()
    // print({value: rabbit.full})
}

// 4

{
    const hamster = {
        stomach: [],

        eat: function(food) {
            this.stomach = [ ...this.stomach, food]
            console.log(this)
        }
    }

    const speedy = {
        name: 'speedy',
        __proto__: hamster
    }

    const lazy = {
        name: 'lazy',
        __proto__: hamster
    }

    speedy.eat('apple')
    console.log(speedy)
    console.log(lazy)
    speedy.eat('banana')

    print({
        value: speedy.stomach,
        description: 'Speedy rabbit\'s stomach:'
    })

    print({
        value: lazy.stomach,
        description: 'Lazy rabbits\'s stomach:'
    })

}
