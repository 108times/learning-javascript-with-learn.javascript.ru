'use strict';

/*

// CHAIN
!function() {
	let a;
	const chain = new Promise(function(resolve, reject) {
		debugger
		setTimeout(() => resolve(1), 1000);
	}).then(function(result) {
		console.log(a);
		debugger
		console.log('y', y);
		alert(result);
		console.log(chain);
		return result * 2;
	}).then(function(result) {
		debugger
		alert(result);
		console.log(chain);
		return result * 2;
	}).then(function(result) {
		debugger
		alert(result);
		console.log(chain);
		return result * 2;
	});
	debugger
// NOT A CHAIN
	const promise = new Promise(function(resolve, reject) {
		debugger
		a = 100;
		setTimeout(() => resolve(1), 1000);
	});

	let y = promise.then(function(result) {
		alert(result);
		console.log(promise);
		return result * 2;
	});

	promise.then(function(result) {
		alert(result);
		return result * 2;
	});

	console.log(promise.then(function(result) {
		alert(result);
		return result * 2;
	}));
}//()

!function() {
	new Promise(function(resolve, reject) {
		setTimeout(resolve, 1000, 1);
	}).then(function(result) {
		debugger
		alert(result);

		return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000, result * 2);
		});
	}).then(function(result) {
		debugger
		alert(result);

		return new Promise( function(resolve, reject) {
			setTimeout(resolve, 1000, result * 4)
		})
	}).then(function(result) {

		alert(result)

	})
}//();



 */

/*
function loadScript(src) {
	return new Promise(function(resolve, reject) {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error('oops'));

		document.head.append(script);
	});
}

loadScript('other1.js').
	then(script1 => loadScript('other2.js')).
	then(script2 => loadScript('other3.js')).
	then(script3 => {
		one();
		two();
		three();
	});

 */

/*
class Thenable {
	constructor(num) {
		this.num = num
	}

	then(resolve, reject) {
		console.log(this)
		alert(resolve)

		setTimeout(() => setTimeout(resolve, 1000, this.num * 2))
	}
}


new Promise(resolve => resolve(1))
	.then(result => {

		return new Thenable(result)
	})
	.then(alert)
*/
console.log(fetch())
const f = fetch('data.json')
	.then(function(q) {
		console.log(f)
		console.log(q)

		return q.text()
	})
	.then(function(text) {
		alert(text)
	})
