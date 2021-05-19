'use strict'


let res = 0
!function () {
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
}).then( result => {
    alert(1, result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 2000)
    })
}).then( result => {
    alert(2, result)
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        console.log(rand)
        qwe
        const value = (rand * 1000).toFixed()
        resolve(result * value)
    })
}).then( result => alert(result))
  .catch(error => {
      console.log('Error: ', error)
  })
}


!function() {

    function loadScript(src) {
        return new Promise( (resolve,reject) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => resolve(script)
            script.onerror = () => reject(new Error(`Wasn\'t able to load ${script}`))
            document.head.append(script)
        })
    }


    loadScript('other1.js')
        .then(script => loadScript('other2.js'))
        .then(script => loadScript('other3.js'))
        .then(script => {
            one()
            two()
            three()
        })


}//()


class Thenable {
    constructor(value, delay = '1000') {
        this.value = value
        this.delay = delay
    }

    then(resolve, reject) {
        let condition = true
        if (condition)
         setTimeout(() => resolve(this.value),this.delay)
        else
         reject(new Error('something went wrong...'))
    }
}

!function() {
   const p = new Promise(resolve => resolve(100))
        .then(
                result => {
                    console.log(p)
                    return new Thenable(result * 2)
                },
                error => {
                    alert('Error:' + error)
                }
            )
        .then(result => {
            console.log(result)
            return new Thenable(result * 10)
        })
        .then(result => {
            console.log(p)
            console.log(result)
            setTimeout(() => {
                return 20000
            })
        })
}//()


// function getGithubAvatarImage() {
//     if (  getGithubAvatarImage.invoked == true) return console.log('invoked!')
//
//     const spinner = document.getElementById('spinner')
//     spinner.style.visibility = 'visible'
//
//
//
//     return fetch('./data.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.user.name)
//         getGithubAvatarImage.invoked = true
//         return fetch(`http://api.github.com/users/${data.user.name}`)
//     })
//     .then(response => response.json())
//     .then(githubUser => {
//
//         return new Promise(function(resolve, reject) {
//             const img = document.createElement('img')
//             img.src = githubUser.avatar_url
//             img.className = 'github-user-image'
//             img.onload = () => {
//                 spinner.style.visibility = 'hidden'
//             }
//             document.getElementsByClassName('content')[0].append(img)
//
//             setTimeout(() => {
//                 img.remove()
//                 resolve(githubUser)
//                 getGithubAvatarImage.invoked = false
//             }, 4000)
//         })
//
//     })
//     .then(githubUser => {
//         alert(`Закончил показ ${githubUser.name}`)
//     })
//     .finally(() => {
//         const spinner = document.getElementById('spinner')
//         spinner.style.visibility = 'hidden'
//     })
//
//     .catch(alert)
// }

// getGithubAvatarImage.invoked = false

function loadJson(url) {
    return fetch(url)
        .then(response => response.json())
}

function loadGithubUser(defaultName) {
    const name = document.getElementById('name').value || defaultName
    console.log(`https://api.github.com/users/${name}`)
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
}

function showAvatar(githubUser) {
    return new Promise( function(resolve, reject) {
        const img = document.createElement('img')
        img.src = githubUser.avatar_url
        img.className = 'promise-avatar-example'
        document.getElementsByClassName('content')[0].appendChild(img)

        setTimeout( () => {
            img.remove()
            resolve(githubUser)
        }, 3000)
    })
}
function getGithubAvatarImage() {

    loadJson('./data.json').
        then(data => loadGithubUser(data.user.name)).
        then(showAvatar).
        then(githubUser => {
            return new Promise(function(resolve, reject) {
                const message = document.createElement('p')
                message.classList.add('message', 'success')
                document.querySelector('.messages').appendChild(message)

                setTimeout(() => {
                    message.classList.add('active')
                    message.innerText =  `Показ аватара ${ githubUser.name } завершён`
                    resolve(message)
                },50)
            })
        })
        .then(message => {
            return new Promise(function(resolve, reject) {
                setTimeout(() => {
                    message.classList.add('fade')
                    resolve(message)
                }, 1500)
            })
         })
        .then(message => {
           setTimeout(() => {
               message.classList.remove('active', 'fade')
           },2000)
        })
}