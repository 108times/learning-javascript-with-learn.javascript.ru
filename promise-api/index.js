'use strict'
const $message = document.getElementById('message')
const print = val => $message.innerHTML += `<p>${val}</p>`
!function() {
    const promise = Promise.all([
        new Promise(resolve => {
            setTimeout(() => {
                console.log('First promise')
                resolve(1)
                }, 3000)
            }),
        new Promise(exec => {

            setTimeout(() => {
                console.log('Second promise')
                exec(2)
            }, 2000)
        }),
        new Promise(fin => setTimeout(() => {
            console.log('Third promise')
            fin(3)
            }, 1000))
    ]).then(print)

}//()


!function () {
    const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
    ]
    const requests = urls.map(url => fetch(url))

    Promise.all(requests)
        .then(responses => responses.forEach(
            response => print(`${response.url}: ${response.status}`)
        ))
}//()

!function() {
    const names = ['iliakan','remy','jeresig']
    const requests = names.map(name => fetch(`https://api.github.com/users/${name}`))

    Promise.all(requests)
        .then(responses => {
            print(`<hr/>`)
            for(let response of responses) {
                print(`<b>${response.url}</b>: ${response.status}`)
            }
            print(`<hr/>`)
            return responses
        }).then(responses => Promise.all(responses.map(r => r.json())))
          .then(users => users.forEach(user => print(user.name)))
}//()

!function() {
   Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
   ])
}//()

!function() {
    const urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-url'
    ]

    Promise.allSettled(urls.map(url => fetch(url)))
        .then(results => {

            results.forEach( (result,num) => {
                if (result.status === 'fulfilled') print(`${urls[num]}: ${result.value.status}`)
                if (result.status === 'rejected') print(`${urls[num]}: ${result.reason}`)
            })

        })
}//()

!function() {
let a,b,c
const p = Promise.race([
  a = new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  b= new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 100)),
  c = new Promise((resolve, reject) => setTimeout(() => resolve(3), 500))
]).catch((err) => console.log(b)).then(() => console.log(b));
}//()



!function () {
    const cache = new Map()
    function loadCached(url) {
        if (cache.has(url)) {
            return Promise.resolve(cache.get(url))
        }

        return fetch(url)
            .then(response => response.text())
            .then(text => {
                cache.set(url, text)
                return text
            })
    }
}()

if(!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(
        promises.map(p => Promise.resolve(p).then(
            value => ({
                status: 'fulfilled',
                value: value
            }),
            error => ({
                status: 'rejected',
                reason: error
            })
        ))
    );
  };
}
