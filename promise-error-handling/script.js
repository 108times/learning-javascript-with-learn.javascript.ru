'use strict'
/*
function partial(func, ...argsBound) {
    console.log(this)
    return function(...args) {
        return func.call(this, ...argsBound,...args)
    }
}
function sum() {
    return [].reduce.call(arguments, (sum,item) => sum + item , 0)
}

const mySum = partial(sum, 2,3,4)
console.log(mySum(12,24,52))


setTimeout(() => {
    console.clear()

    !function () {
         function abc() {
    return 'abc'
    }
    const a = () => 'a'

    console.log(a)
    console.log(abc.prototype.constructor)

    const p1 = new Promise((resolve,reject) => {
        throw new Error('Ошибка!')
    }).catch(console.log)
    // ===
    const p2 = new Promise((resolve, reject) => {
        reject(new Error('Ошибкка!'))
    }).catch(console.log)

    const p3 = new Promise((resolve,reject) => {
        blbl()
    }).catch(console.log)



    const p4 = new Promise((resolve,reject) => {
        throw new Error('Ошибка')
    }).catch(function(error) {
        console.log('Ошибка обработана, продолжить работу...')
    }).then(() => console.log('Управление перейдет в следующий then...'))


    }//()

let a = 0
const p5 = new Promise((resolve,reject) => {

    throw new Error('Ошибка')
}).catch(function(error) {
    a = 100

    if (error instanceof URIError) {
        // handle
    } else {
        console.log('Не могу обработать ошибку 1')
        throw error
    }
}).then(function() {
    // console.log('Не выполнится')
}).catch(error => {

    console.log(`Неизвестная ошибка: ${error}`)
})

const p6 = new Promise((resolve, reject) => {

  throw new Error("Ошибка!");

}).catch(function(error) { // (*)
    a= 200

  if (error instanceof URIError) {
    // обрабатываем ошибку
  } else {
    alert("Не могу обработать ошибку 2");

    throw error; // пробрасывает эту или другую ошибку в следующий catch
  }

}).then(function() {

}).catch(error => { // (**)

  alert(`Неизвестная ошибка: ${error}`);
  // ничего не возвращаем => выполнение продолжается в нормальном режиме

});


},200)
*/

class myPromise {
    status = '<pending>'
    value = undefined

    constructor(executor) {
        executor(this.resolve, this.reject)

        return this
    }

    resolve(value) {
        this.status = '<fullfilled>'
        this.value = value

        return this
    }

    reject(error) {
        this.status = '<rejected>'
        this.value = error

        return this
    }
}
const executor = (res,rej) => {
    const fullfilled = [
        false,
        false
    ]
    Object.defineProperties(fullfilled, {
        toString: {
            value: function() {
                let result = 'false'
                for(let i = 0; i < this.length; i++) {
                    console.log(this[i], this.length)
                    if (this[i] !== false) result = 'true'
                }
                return result
            },
            enumerable: false
        }
    })

    setInterval(() => {

        if ( fullfilled == 'true') res()
        // console.log(fullfilled)
    },50)

    new Promise((resolve, reject) => {
        reject(new Error('Ошибка!'))
    }).catch(error => {
        alert('Ошибка обработана, продолжить работу')
    }).then(() => {
        alert('Управление перейдет в следующий then')

        fullfilled[0] = true
    })


    new Promise((resolve, reject) => {

        throw new Error('Ошибка qwe!')

    }).catch( function(error) {
        if (error instanceof URIError) {

        } else {
            alert('Не могу обработать ошибку!')
            throw error
        }
    }).then(function(value) {

        alert(`Successfull: ${value}`)

    }).catch(error => {

        alert(`Неизвестная ошибка: ${error}`
        )

        fullfilled[1] = true

    })



}

/*
new Promise((res,rej) => {
    const fullfilled = [
        false,
        false
    ]
    Object.defineProperties(fullfilled, {
        toString: {
            value: function() {
                let result = 'false'
                for(let i = 0; i < this.length; i++) {
                    if (this[i] !== false) result = 'true'
                }
                return result
            },
            enumerable: false
        }
    })

    setInterval(() => {

        if ( fullfilled == 'true') res(1)
        // console.log(fullfilled)
    },50)

    new Promise((resolve, reject) => {
        reject(new Error('Ошибка!'))
    }).catch(error => {
        alert('Ошибка обработана, продолжить работу')
    }).then(() => {
        alert('Управление перейдет в следующий then')

        fullfilled[0] = true
    })


    new Promise((resolve, reject) => {

        throw new Error('Ошибка qwe!')

    }).catch( function(error) {
        if (error instanceof URIError) {

        } else {
            alert('Не могу обработать ошибку!')
            throw error
        }
    }).then(function(value) {

        alert(`Successfull: ${value}`)

    }).catch(error => {

        alert(`Неизвестная ошибка: ${error}`
        )

        fullfilled[1] = true

    })



}).then((val) => alert('Finished ' + val))


*/
window.addEventListener('unhandledrejection', function(event) {
    console.log({
        promise: event.promise,
        reason: event.reason
    })
})

new Promise(function() {
    throw new Error('Unhandled rejectuin')
}).then(() => {
    console.log('qewqe')
})


console.log('qw')

console.log('we')

setTimeout(() => {
    console.log(1000)
},1000)
