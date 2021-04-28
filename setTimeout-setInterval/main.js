'use strict'

const now = Date.now()

function getSeconds() {
    const now = new Date()
    return now.getSeconds()
}

function getMilliseconds() {
    const now = new Date()
    return now.getMilliseconds()
}
// setTimeout('console.log(\' QWE \')')
// console.log("q")
// console.log("w")
// const greet = new Function('phrase', 'word', 'alert(`${phrase} ${word}!`)')
// const timerId0 = setTimeout(greet, 1200, 'Hi', 'Amir')
// const timerId1 = setTimeout('alert(\'Hi!\')', 800)
// alert(timerId0 + timerId1)
// setTimeout(() => clearTimeout(timerId1),500)
// setTimeout(() => alert(timerId1), 600)
// const timerId = setInterval(() => console.log('tick ' + getMilliseconds()), 100)
// setTimeout(() => clearTimeout(timerId), 1600)
// let tmId = setTimeout( function tick() {
//     console.log('tick ' + getMilliseconds())
//     tmId = setTimeout(tick, 500)
// }, 500)
// let i = 0
// let timerId = setInterval(() => console.log(getMilliseconds()),1000)
// setTimeout(() => clearInterval(timerId), 5000)
//
// setTimeout(() => {
//     console.log("Q")
//     timerId = setTimeout(function f() {
//         console.log( getMilliseconds())
//         setTimeout(f, 300)
//     }, 300)
// },5000)
// const start = Date.now()
// const times = []
//
// setTimeout(function run() {
//     times.push(Date.now() - start)
//
//     if (start + 100 < Date.now()) console.log(times)
//     else setTimeout(run)
// })
//

function printNumbers0(from, to) {
    for (let i = from, delay = 0; i <= to; i++) {
        setTimeout(() => {
            console.log(i)
        }, delay++ * 300)
    }
}
function printNumbers1(from, to) {
    let timerId = setInterval(function () {
        if (from == to) clearInterval(timerId)
        console.log(from++)
    },200)
}
function printNumbers2(from, to) {
    setTimeout(function f(){
        console.log(from++)

        if (from - 1 == to) return
        setTimeout(f, 100)
    })
}
function printNumbers3(from, to) {
    let current = from

    function go() {
        console.log(current)
        if (current == to) clearInterval(timerId)
        current++
    }

    go();
    let timerId = setInterval(go,1000)
}

// printNumbers1(10,20)

function calcTimeOffset() {
    let i = 0
    setTimeout( () => alert(i), 100)

    for (let j = 0; j < 100000000000000; j++) {
        i++
    }
}
calcTimeOffset()