'use strict'

!function () {
console.log(`Начинаю выполнение: ${performance.now()}`)

const p = Promise.resolve()
p.then(() => {
    console.log(`Завершил промис: ${performance.now()}`)
})

console.log(`Код выполнен: ${performance.now()}`)


let promise = Promise.reject(new Error('Ошибка в промисе!'))

setTimeout(() => promise.catch(err => alert('поймана'), 1000))

window.addEventListener('unhandledrejection', event => alert(event.reason))
}//()


// const promise = Promise.reject(new Error('Ошибка в промисе!'))
// // promise.catch(err => alert('поймана!'))
// setTimeout(()=>promise.catch(err => alert('поймана')),2000)

window.addEventListener('unhandledrejection', event => {
    alert(event.reason)
})

let variable = 0
new Promise( function executor(resolve, reject) {
    variable = 10
    debugger
    setTimeout( () => {
        variable = 100
        debugger
        resolve(variable)
    }, 2000)
}).then(result => {
    debugger
    console.log(result)
})


new Promise( function executor(resolve,reject){
    variable = 20
    debugger
    setTimeout(() => {
        variable = 200
        debugger
        resolve(variable)
    },1000)
}).then(result => {
    debugger
    console.log(result)
})

// hello('108times')
// hello('const')
// hello('name')
// hello('charlie')
// hello('amir')
/*
function list(type) {
    let html = `<${type}l><li>`
    let args = Array.prototype.slice.call(arguments, 1)
    html += args.join('</li><li>')
    html += `</li></${type}l>`

    return html
}

document.body.innerHTML = list('u','one', 'two', 'three')
*/
