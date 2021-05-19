
let a = 7
console.log(a)


const b = new Promise(function(resolve, reject){
		setTimeout(() => {
			resolve(a = 99)
		}, 2000)
})