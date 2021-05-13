'use strict'
/*
const a = false
const promise = new Promise(function(resolve, reject) {
    setTimeout( () => {
        if (a) resolve(true)
        else reject(new Error('Whoops'))
        console.log(promise)
    }, 1000)
})


console.log(promise)
*/


!function(){
let arr =  'qwe'//[1,2,3]
function executor(resolve, reject) {
    if (Array.isArray(arr))  {resolve('arr is array..');}
    else reject(new SyntaxError('arr must be an array!'))

}

const promise = new Promise(executor)

console.log(promise)
}//()

!function () {
    setTimeout(() => {
        console.clear()
        // const executor = (resolve, reject) => setTimeout(reject(new Error('Whoops')),1000)
        const executor = (resolve, reject) => setTimeout(resolve('done'),1000)
        const promise = new Promise(executor)

        setTimeout(() => console.log(promise), 1200)
    }, 2000)
}//()

!function () {
    function executor(resolve, reject) {
        setTimeout(reject, 1000, new Error('errrorr'))
    }

    const promise = new Promise(executor)

    promise.then(
        result => alert(result),
        error => alert(error)
    )
}//()

!function () {
    const promise = new Promise((resolve,reject) => {
        setTimeout(reject, 1000, new Error('Error!'))
    })

    promise.catch(alert)
}//()

!function() {
   const promise = new Promise((resolve, reject) => {
       setTimeout(resolve, 2000, 'result')
   })
       .finally(() => alert('Promise is finished'))
       .then( result => alert(result))
}//()

!function() {
   const promise = new Promise((resolve, reject) => {
       setTimeout(reject, 2000, new Error('error msg'))
   })
       .finally(() => alert('Promise is finished'))
       .catch( result => alert(result))
}//()


function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve(script)
        script.onerror = reject(new Error(`Wasn\'t able to load ${src} something went wrong!`))
        document.head.append(script)
    })
}



let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')
    promise.then(
        script => alert(`One more handler`)
    )
    promise.then(
        script => alert(`${script.src} loaded!`),
        error => alert(`Error: ${error.message}`)
    )
    promise.finally( () => alert('load script finished'))

