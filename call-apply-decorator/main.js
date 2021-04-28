// 'use strict'
//
// function slow(x) {
//     // ресурсоемкие вычисления
//     console.log(`Slow. Called with ${x}`)
//     return x
// }
//
// function fast(x) {
//     console.log(`Fast. Called with ${x}`)
//     return x
// }

// const cachingDecorator = function f(func) {
//     const cache = new Map()
//     return function (x) {
//         if (cache.has(x)) {
//             console.log('took ' + x + ' from cache')
//             return cache.get(x)
//         }
//
//         console.log('cached ' + x)
//         const result = func(x)
//         cache.set(x ,result)
//         return result
//     }
// }
//
// slow = cachingDecorator(slow)
// fast = cachingDecorator(fast)
//
// const log = x => x
// fast('1')
// log(slow('Amir'))
// log('Again' + slow('Amir'))
// log(slow(2))
// fast(2)
// log('Again' + slow(2))


// let worker = {
//     someMethod() {
//         return 2
//     },
//
//     slow(x) {
//         // there may be heavy calculations
//         // console.log(`Initially called with ${x}`)
//         return x * this.someMethod()
//     }
// }

// function cachingDecorator(func) {
//     console.log(this)
//     console.log(func)
//     const cache = new Map()
//     const fn = function (z) {
//         console.log(this)
//         let result = cache.get(z)
//         if (!result) {
//             result = func.call(this, z)
//             cache.set(z, result)
//         }
//         return result
//     }
//     return fn
// }
//
// console.log(worker.slow(12))
// worker.slow = cachingDecorator(worker.slow)
// console.log(worker.slow(12))
// console.log(worker.slow)

// call
// function sayHi() {
//     console.log(this.name)
// }
// function say(phrase) {
//     console.log(this.name + " : " + phrase)
// }
// const john = { name: "John" }
// const admin = { name: "Admin" }
// sayHi.call(john)
// sayHi.call(admin)
// say.call(john,"H")

// worker = {
//     slow(min, max) {
//         console.log(`Called with ${min} and ${max}`)
//         return parseInt(min) + parseInt(max); // there may be a heavy task...
//     }
// }
/*
function cachingDecorator(func) {
    const cache = new Map()

    return function () {
        let result = cache.get(arguments[0])
        result =result ? result.get(arguments[1]) : result
        if (!result) {
            result = func.call(this, ...arguments)
            cache.set(arguments[0], new Map().set(arguments[1], result))
        }
        console.log(cache)
        return result
    }
}
*/

// function cachingDecorator(func ) {
//     const cache = new Map()
//
//      return function() {
//         const hashedString = hash(arguments)
//         console.log(`hashedString for ${func.name} with arguments:[${[].join.call(arguments)}] - ` + hashedString)
//         let result = cache.get(hashedString)
//
//         if (!result) {
//             result = func.apply(this, arguments)
//             cache.set(hashedString, result)
//         }
//         console.log(cache)
//         return result
//     }
//
// }
// function hash() {
//     return [].join.call(...arguments, "|")
// }
//
// console.log(worker.slow(1,2))
// worker.slow = cachingDecorator(worker.slow, hash)
// console.log(worker.slow(1, 2))
// console.log(worker.slow(3, 5))
// console.log(worker.slow(20, 10))

// tasks
// 1
function work( a, b ) {
    console.log( a + b )
}

function spy( func ) {
    const result = function fn( ...args ) {

        fn.calls.push( {
            calledWith : [].join.apply( arguments ),
            calledOn : this,
        } )

        return func.apply( this, args )
    }
    result.calls = [];
    return result
}

// work = spy(work)
// work(1,2)
// work(4,5)
// console.log(work.calls)

const calc = {
    sum : function ( a, b ) {
        return a + b
    }
}
// calc.wrappedSum = spy(calc.sum)
// let wrappedSum = (...args) => args.reduce((prev, i) => prev + i)
// wrappedSum = spy(wrappedSum)
// console.log(wrappedSum(100,200))
// console.log(calc.wrappedSum(10,20))
// console.log(calc.wrappedSum.calls)
// console.log(wrappedSum.calls)


//2
function f( x, y ) {
    alert( x + " " + y )
}

function delay( f, ms ) {
    return function () {
        setTimeout( () => f.apply( this, arguments ), ms )
    }
}

// let f1200 = delay(f, 1200)
// let f2800 = delay(f, 2800)
// f1200(100000, 200)
// f2800('hei')
//

//3


function debounce( f, ms ) {
    let finishTime = 0
    return function () {

        let notFinished = Date.now() < finishTime

        if ( notFinished ) return

        const result = f.apply( this, arguments )

        finishTime = Date.now() + ms

        return result
    }
}


function debounce( f, ms ) {
    let isCooldown = false
    return function () {
        console.log( isCooldown )
        if ( isCooldown ) return
        f.apply( this, arguments )
        isCooldown = true
        setTimeout( () => isCooldown = false, ms )
    }
}


// const fn = debounce( alert, 1000 )
// fn( 1 )
// fn( 2 )
// setTimeout( () => fn( 3 ), 100 );
// setTimeout( () => fn( 4 ), 1100 );
// setTimeout( () => fn( 5 ), 1500 );
// setTimeout( () => fn( 10 ), 2990 );
// setTimeout( () => fn( 10 ), 4790 );
//

//4
function update( a ) {
    alert( `${ a }` )
}

function throttle( f, ms ) {
    let isCooldown = false
    let lastCallArguments = null
    let lastCallThis = null

    const result = function fn() {

        if ( isCooldown ) {
            lastCallArguments = arguments
            lastCallThis = this
            return
        }

        f.apply( this, arguments )

        isCooldown = true

        setTimeout( () => {
            isCooldown = false
            if ( lastCallArguments ) {
                fn.apply( lastCallThis, lastCallArguments )
                lastCallArguments = null
                lastCallThis = null
            }
        }, ms )
    }

    return result
}

// let f1000 = throttle(update, 1000)
//
// f1000(1)
// f1000(2)
// f1000(3)
//
// setTimeout(() => f1000(5),1200)
// setTimeout(() => f1000(52),1200)
// setTimeout(() => f1000(520),1210)

let user = {
    firstName : "Вася",
    sayHi() {
        console.log( this )
        console.log( `Привет, ${ this.firstName }!` )
    },
    sayBye() {
        console.log( `Пока, ${ this.firstName }` )
    }
};
let user2 = {
    firstName : "Amir"
}
let admin = {
    firstName : "Admin"
}


function func() {
    console.log( this.firstName, this )
}

function greet( phrase ) {
    console.log( phrase + ', ' + this.firstName )
}

// let funcUser = func.bind( user );
// funcUser();
//
// let greetUser = greet.bind(user)
// greetUser("Greetings")

let sayHi = user.sayHi.bind( user2 )

// setTimeout(sayHi, 1000)

function bindAll( obj, target ) {
    for ( let prop in obj ) {
        if ( typeof obj[ prop ] == 'function' ) {
            obj[ prop ] = obj[ prop ].bind( target )
        }
    }
    return obj
}

//
// user = bindAll(user,user2)
// sayHi = user.sayHi
// let sayBye = user.sayBye
// sayHi()
// sayBye()


function partial( func, ...argsBound ) {
    return function ( ...args ) {
        // console.log(this)
        // return func.apply(this, [...argsBound, ...args])
        return func.call( this, ...argsBound, ...args )
        // return func(...argsBound, ...args)
    }
}

user = {
    firstName : "John",
    say( time, phrase ) {
        console.log( `[${ time }] ${ this.firstName }: ${ phrase }` )
    }
}

// user.sayNow = partial(user.say, (new Date().getHours() + ":" + new Date().getMinutes()))
// user.sayNow("Howdy?")

//tasks
{
    'use strict'

    //1
    function f() {
        console.log( this );
    }

    let user = {
        g : f.bind( null )
    }
    user.g()

    //2
    {
        function f() {
            console.log( this.name )
        }

        f = f.bind( { name : 'Вася' } ).bind( { name : 'Петя' } )
        f()
    }

    //3
    function sayHi() {
        console.log( this.name )
    }

    sayHi.test = 5

    console.log( sayHi )
    let bound = sayHi.bind( {
        name : "John"
    } )
    console.log( bound.test )

    //4
    {
        function askPassword( ok, fail ) {
            let password = prompt( "Password?", "" )
            if ( password == "rockstar" ) ok();
            else fail();
        }

        let user = {
            name : "John",

            login( result ) {
                alert( this.name + (result ? " logged in" : " failed to log in") )
            }
        }

        // askPassword(user.login.bind(user, true), user.login.bind(user, false))
        // askPassword( () => user.login(true), () => user.login(false) )
    }

    {
        const person = {
            age : 10,
            setAge( newAge ) {
                this.age = newAge;
            },
            refreshAge( userId ) {
                fetchAgeFromDb( ( newAge ) => {
                    this.setAge( newAge );
                } );
            },
        };

        function fetchAgeFromDb( fn ) {
            fn( 20 );
        }

        person.refreshAge();
        console.log( person.age );
    }
}

function throttle( func, ms ) {
    let isThrottled = false
    let lastCall = null
    return function fn() {
        if ( isThrottled ) {
            lastCall = {
                this : this,
                arguments : arguments
            }
            return console.log( `not finished yet!` )
        }
        const result = func.apply( this, arguments )
        isThrottled = true
        setTimeout( () => {
            isThrottled = false
            if ( lastCall ) {
                fn.apply( lastCall.this, lastCall.arguments )
                lastCall = null
            }
        }, ms )
        return result
    }
}

function log( a ) {
    console.log( a + " ==> " + new Date().getMilliseconds() )
}

const throttledLog = throttle( log, 1000 )

throttledLog( 1 )
throttledLog( 2 )
throttledLog( 3 )
setTimeout( throttledLog, 1100, 12 )


{
    function cachingDecorator( f, hashFunction ) {
        let cache = new Map()
        return function () {
            const hash = hashFunction( ...arguments )
            let result = cache.get( hash )

            if ( !result ) {
                result = f.call( this, ...arguments )
                cache.set( hash, result )
            }
            console.log( cache )
            return result
        }
    }

    function sum( ...args ) {
        return args.reduce( ( prev, curr ) => prev + curr )
    }

    function hashFunction() {
        return [].join.call( arguments )
    }

    const sumWithCache = cachingDecorator( sum, hashFunction )
    sumWithCache( 1, 2, 3, 4 )
    sumWithCache( 2, 1, 4, 3 )
    sumWithCache( 10, 20, 30 )
}

let group = {
    title : "Our Group",
    students : [ "John", "Pete", "Alice" ],
    // showList: function () {
    //     this.students.forEach(function(student) {
    //         console.log(`${this.title}: ${student}`)
    //     })
    // }
    showList() {
        this.students.forEach( student => console.log( `${this.title} : ${student}` ) )
    }
}
group.showList()

