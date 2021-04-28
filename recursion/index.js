"use strict"

function recursivePow(x, n) {
    if (n == 1) {
        return x
    } else {
        return x * recursivePow(x, n - 1)
    }
}

function recursivePow(a, n) {
    return (n === 1) ? a : (a * recursivePow(a, n - 1))
}

console.log(recursivePow(2,32))
console.log(4)

const ABCD = ["A","B","C","D"]

String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}
console.log("Amir".reverse())

const linkedList = {
    prev:null,
    value:1,
    next: {
        prev:null,
        value: 3,
        next: {
            prev:null,
            value:6,
            next:null
        }
    }
}
linkedList.next.prev = linkedList
linkedList.next.next.prev = linkedList.next
console.log(linkedList)

let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 1200
        }
    ],

    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce( (prev,current) => prev + current.salary, 0)
    } else {
        let sum = 0
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

console.log(sumSalaries(company))

function getSumOfLinkedList(linkedList) {
    let sum = 0
    while ( linkedList ) {
        sum += linkedList.value
        linkedList = linkedList.next
    }
    return sum
}


// function pushToLinkedList(value, linkedList) {
//     while (linkedList) {
//         if (linkedList.next == null) {
//             linkedList.next = {
//                 value,
//                 next: null
//             }
//         }
//         return
//         linkedList = linkedList.next
//     }
//
// }

//
// console.log(pushToLinkedList(12, linkedList))
// console.log(getSumOfLinkedList(linkedList))


/** Tasks
 *  1
 * */

function sumTo(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += n--
    }
    return sum
}
console.log(sumTo(4))