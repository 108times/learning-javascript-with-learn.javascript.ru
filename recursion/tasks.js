/** Tasks
 *  1
 * */

let sumTo = (n) => {
    let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += n - i
        }
    return sum
}

console.log(sumTo(100))
console.log(sumTo(4))

sumTo = (n) => {
    if (n === 1) return n
    return n + sumTo(n - 1)
}

console.log(sumTo(1000))
console.log(sumTo(4))
console.log(sumTo(100))

sumTo = (n) => {
    return n * (n+1)/2
}

console.log(sumTo(9610))
console.log(sumTo(4))
console.log(sumTo(100))

/** Tasks
 *  2
 * */
function factorial(n) {
    if (n === 1) return n
    return n * factorial(n - 1)
}
function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : n
}
console.log(factorial(5))

/** Tasks
 *  3
 * */

let fib = (n) => {
    let result = 0
    let prev = 0;
    let prevprev = 0
    for (let i = 1 ; i <= n; i++) {
        result += n - i
    }
    return result
}

fib = (n) =>  {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}
console.log(fib(7))

fib = (n) =>  {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(7))

fib = (n) =>  {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[arr.length - 1]
}

console.log(fib(7))

/** Tasks
 *  4
 * */
const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                    next: {
                        value: 8,
                        next: null
                    }
                }
            }
    }
}

let printList = (list) => {
    return list.next ? list.value + " " + printList(list.next) : list.value
}

printList = l => {
    let list = l
    let result = ""
    while(list) {
        result += " " + list.value
        list = list.next
    }
    return result
}
console.log(printList(list))


/** Tasks
 *  5
 * */
let printReversedList = (l) => {
    let list = l
    if (!list.next) {
        return list.value
    }
    return printReversedList(list.next) + " " + list.value
}
console.log(printReversedList(list))
printReversedList = (l) => {
    let list = l
    let result = ""
    while (list) {
        result = list.value + " " + result
        list = list.next
    }
    return result
}
console.log("Q");
args = [1,2,32,55,26,24]
console.log(Math.max(...args))
function print(list) {
    console.log(list.value)
    if (list.next) {
       print(list.next)
    }
}

function reversePrint(list) {
    if (list.next) {
        return print(list.next)
    }
    console.log(list.value)
}

print(list)
reversePrint(list)
