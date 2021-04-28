
const sliderOptions = {
	width: "80%",
	height: "400px",
	items: [
		{
			type: "img",
			src: "slider-1.jpg",
			width: "100%",
			height: "100%"
		},
		{
			type: "img",
			src: "slider-2.jpg",
			width: "100%",
			height: "100%"
		}
	]
}
function createSlider({
	width:w = "500px",
	height,
	items,
	bgColor = "white"
	} = {}) {
	console.log(w)
	console.log(bgColor)
}

createSlider(sliderOptions)
createSlider({})

const vars = {
	greet: undefined
}

function greet(name) {
	greet = vars.greet || "Hello"
	if (name) console.log(`${greet}, ${name}!`)
}

console.log(greet("Name"))

function User(name) {
	this.sayHi = function() {
		console.log(name)
	}
}
const user = new User("Krishna")
// user.sayHi()


function sayHiBye(firstName, secondName) {
	function getFullName() {
		return `${firstName} ${secondName}`
	}

	console.log(`Hello ${getFullName()}`)
	console.log(`Bye ${getFullName()}`)
	return getFullName
}

console.log(sayHiBye('Amir', 'Kadenov')())

-function() {
	console.log('Hello world!')
	let tea = 'green'

}()


function User () {
	const user = {}
	const self = user
	let name = 'guestName'
	let secondName = 'guestSecondName'
	let age = 18
	let profession = 'Front-end junior developer'
	let hobbies = ['astrology', 'palmistry', 'music']

	user.setFullName = function(newFirstName, newSecondName) {
		name = newFirstName ?? name
		secondName = newSecondName ?? secondName
	}

	user.printHobbies = function() {
		return `${name}'s hobbies: ${ hobbies.join(", ")}`
	}

	user.getFullName = function () {
		return `${name} ${secondName}`
	}

	user.getAge = function () {
		return age
	}

	user.getThis = function () {
		return self
	}

	user.getProfession = function () {
		return profession
	}

	return user
}

const user1 = new User()
user1.setFullName('Amir', 'Kadenov')

console.log(user1.getFullName())
console.log(user1.getThis())
console.log(user1.printHobbies())
console.log(user1.getProfession())

console.log(User.name)

const Question = function ({
	text: t = 'How are you?',
	yesCallback: y = () => console.log('Success!'),
	noCallback: n =() => console.log('Failure'),
	expectedAnswer: e = null
}) {
	prompt = function() {}

	this.text = t
	this.yesCallback = y
	this.noCallback = n
	this.expectedAnswer = e

	this.ask = function () {
		const answer = prompt(this.text)

		this.expectedAnswer
		? answer === expectedAnswer ? y() : n()
		: (answer ? y() : n())
	}
}

const question = new Question('How old are you').ask()

console.log(if(true) {})
