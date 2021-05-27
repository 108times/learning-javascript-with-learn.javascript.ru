'use strict'
import utils from './misc.js'
// tasks

// 1
// async function loadJson(url) {
//     const response = await fetch(url)

//     if (!response.status == 200) throw new Error(response.status)

//     return await response.json()
// }

// loadJson('no-such-user.json')
//     .catch(err => utils.printPromise.call(utils, Promise.resolve(err)))


// 2
!function(){


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`)
        this.name = 'HttpError'
        this.response = response
    }
}

class InputError extends Error {
    constructor(msg) {
        super('Ошибка ввода: ' + msg)
        this.name = 'InputError'
    }
}

async function loadJson(url) {
    const response = await fetch(url)

    if (response.status !== 200) throw new HttpError(response)

    return await response.json()
}


// async function demoGithubUser() {
//     let name
//     let result = null
//     let loop = true
//     while( loop ) {
//         try {
//             name = prompt('Введите логин?', '108times')

//             if (name == null || name == '') throw new InputError()

//             const githubUser = await loadJson(`https://ap.github.com/users/${name}`)

//             alert(`Полное имя: ${githubUser.name}`)

//             result = githubUser

//             loop = false

//         } catch(e) {

//             if (e instanceof HttpError && e.rsponse.status == 404 ||
//             e instanceof InputError) {
//                     alert(`Такого пользователья не существует! Пожалуйста, повторите ввод.`)
//                     continue
//             }

//             throw e
//         }
//         if (!loop) return result
//     }
// }



async function demoGithubUser() {
    let name
    let result = null
    while( true ) {
        try {
                name = prompt('Введите логин?', '108times')

                if (!name) throw new InputError('empty field')

                const user = await loadJson(`https://api.github.com/users/${name}`)

                alert(`Полное имя: ${user.name}`)

                result = user

                break

        } catch(e) {

                let err = false

                if (e instanceof HttpError && e.response.status == 404) {

                    err = true

                    alert(`Такого пользователья не существует! Пожалуйста, повторите ввод.`)


                }

                if (e instanceof InputError) {

                    err = true

                    alert(e)


                }

                if (err) {
                    continue
                }

                throw e
        }
    }

    return result
}



async function realDemoUser() {
    let name, user

    while (true) {
        name = prompt('Введите логин?', '108times')
        try {
            if (!name) throw new InputError('Поле не должно быть пустым!')
            user = loadJson(`https://api.github.com/users/${name}`)
            break;
        } catch(e) {
            if (e instanceof HttpError && e.response.status === 404) {
                alert('Такого пользователья не существует! Пожалуйста, повторите ввод.')
            } else if (e instanceof InputError) {
                alert(e.message)
            } else {
                throw e
            }

        }
    }
    alert(`Полное имя: ${user.name}.`)
    return user
}


try {
const user = realDemoUser()
user.then(user => {
    const img = document.createElement('img')
    img.src = user.avatar_url
    utils.printPromise(Promise.resolve(img))

    setTimeout(() => {
        img.parentElement.remove()
    },4000)
})
} catch(e) {
    console.log(e)
}

}//()
// 3

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return 10
}


function f () {
    wait().then(v => {
        alert(v)
    })
}
f()
