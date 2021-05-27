'use strict'
const $app = document.getElementById('root')

const printPromise = text => {

	text.then(v => {
		const id = `p${performance.now()}-${printPromise.number++}`.replace('.','')
		if (Object.prototype.toString.call(v) === '[object HTMLImageElement]') {
			const p = document.createElement('p')
			p.classList.add('appear')
			p.classList.add(id)
			p.append(v)
			$app.append(p)
		} else {
			$app.innerHTML = $app.innerHTML + `<p class="${id} appear">${v}</p>`
		}
		new Promise((res,rej) => {
			setTimeout( () => {
				res(document.querySelector(`.${id}`))
			}, 200)
		}).then(el => {
			el.classList.remove('appear')
			setTimeout(() => el.classList.add('animate-before'), 200)
		})

	})
}
printPromise.number = 0

const print = text => {
	$app.innerHTML = $app.innerHTML + `<p>${text}</p>`
}

function delay(ms) {
	return new Promise((resolve,reject) => setTimeout(() => resolve(true), ms))
}

!function() {

	async function f() {
		return 1
	}

	async function f() {
		return Promise.resolve(1)
	}

	printPromise(f().then(v => v))


	async function fn() {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve('Готово!'), 1000)
		})

		const result = await promise

		return result
	}

	printPromise(fn())

}//()


!function() {



	async function showAvatars() {
		// запрашиваю JSON с данными пользователя
		const response = await fetch('./user.json')
		const users = await response.json()

		const usersArray = Object.keys(users).map( key => users[key])

		let i = usersArray.length-1

		const timer = setInterval(() => {
			if (usersArray.length) {
				showAvatar(usersArray[i--].name)
				usersArray.pop()
				return
			}
			clearInterval(timer)
		}, 1300)
	}

	async function showAvatar(user) {
		// запрашиваю информацию об этом пользователе из github
		const githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
		const githubUser = await githubResponse.json()

		// отоброжаю аватар пользователя
		const img = document.createElement('img')
		img.src = githubUser.avatar_url
		img.className = "promise-avatar-example"

		const p = document.createElement('p')
		p.className = 'appear'
		p.append(img)
		printPromise(Promise.resolve(img))

		await new Promise((resolve, reject) => setTimeout(resolve, 3000))

		p.remove()

		return githubUser
	}

	delay(1000).then(result => showAvatars())


}//()


!function() {
	async function f() {
		const promise = new Promise((res,rej) => {
			 setTimeout(() => res('готово!'),1000)
		})

		const result = await promise
		print(result)
	}

	f()
}//()


function executeTaskNTimes(times, task) {
	for (let i = 1; i <= times; i++) task(i)
}

(function() {

	executeTaskNTimes(100, async (index) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + index)

		const json = await response.json()

		await delay(1000)

		printPromise(Promise.resolve(`<b>${json.id}</b> : ${json.title}`))

	})

})//()


class Thenable {
	constructor(num) {
		this.num = num
	}
	then(resolve, reject) {
		setTimeout(() => resolve(this.num * 2), 2000)
	}
}


!(() => {

async function f(v = 1) {
	const result = await new Thenable(v)
	printPromise(Promise.resolve(result))
	return result
}

f().then(v => f(v)).then(v => f(v))




class Waiter {
	constructor(waitingTime) {
		this.waitingTime = waitingTime
	}

	async wait() {
		return await new Promise((res,rej) => setTimeout( () => res(), this.waitingTime))
	}
}

new Waiter(3000)
	.wait()
	.then(v => printPromise(Promise.resolve(v)))
})//()

async function f() {
	try {
		const response = await fetch('https://no-such-url')
		return await response.json()
	} catch(e) {
		print(e)
	}

}
f()
