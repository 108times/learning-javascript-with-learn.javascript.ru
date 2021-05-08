'use strict'

// Try catch


/*
try {
    setTimeout(function () {
        noSuchVar
    })
} catch ( e ) {
    console.log(e ? e : 'Empty')
}

setTimeout( function () {
    try {
        noSuchVarrr
    } catch ( e ) {
        console.log(e ? e : 'Empt')
    }
},500)
*/

try {
    lalal
} catch(err) {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)

    console.log(err)
}


try {
    123
    leqwr
} catch {}

{
const json = '{"name" : "John", "age" : 30}'
const user = JSON.parse(json)
console.log(user)

{
    console.clear()
    const json = '{ incorrect JSON }'
    try {
        const user = JSON.parse(json)
    } catch (err) {
        console.group('Error object')
        console.log('Sorry, internal error have occured!')
        console.log(err.name)
        console.log(err.message)
        console.log(err.stack)
        console.groupEnd('Error object')
    }
}


{
    const error = new Error('test error')
    const refError = new ReferenceError('ref error test')
    const myError = function () {
        this.name = 'Custom Error'
        this.message = 'Some error has occured!'
    }
    console.log([error,refError,myError])
}


{
    try {
        JSON.parse('{bad json}')
    } catch(e) {
        console.log(e)
    }
}


{
    const json = '{\'age\': 30}'
    try {
        const user = JSON.parse(json)
        if (!user.name) throw new SyntaxError('Data is incomplete: name is missing!')
        console.log(user.name)
    } catch(e) {
        console.log('JSON Error: ' + e.message)
    }
}
}

-function() {
    console.clear()
    const json = '{ "age": 30, "name": "Amir"}'

    try {
        user = JSON.parse(json)
        if (!user.name) throw new SyntaxError('Data is incomplete! name is missing')
        yareyare()
        console.log(user.name)
    } catch(e) {
        if (e.name !== 'SyntaxError') {
             throw e
        }

        console.log('JSON error: ' + e.message)
    }
}//()

-function() {
    console.clear()
    function readData() {
        const json = '{ "age" : 30 }'

        try {
            blabla()
        } catch(e) {
            if (e.name !== 'SyntaxError') throw e
        }
    }

    try {
        readData()
    } catch(e) {
        console.log(`Внешний catch поймал: ${e}`)
    }
}()

// try...catch...finally
-function() {
    console.clear()
    try {
        console.log('try')
        if (confirm('Throw a mistake?')) BAD_CODE()
    } catch(e) {
        console.log('catch')
    } finally {
        console.log('finally')
    }
}//()


+function() {
    console.clear()
    let num = +prompt('Enter a positive integer value', 36)

    let diff, result

    function fib(n) {
        if (n < 0 || Math.trunc(n) != n) {
            throw new Error('Number must be positive integer value')
        }

        return n <= 1 ? n :fib(n-1) + fib(n-2)
    }

    const start = Date.now()

    try {
        result = fib(num)
        qwe()
    } catch(e) {
        console.log(e.stack.split(''))
        result = 0
    } finally {
        diff = Date.now() - start
    }

    alert(result || 'An error occured')
    alert(`Execution took ${diff} milliseconds`)
}//()

window.onerror = function(message,url,line,col,error) {
    console.log(`${message} \nВ ${line}:${col} на ${url}`)
}

