'use strict'

function loadScript(src, callback) {
    const script = document.createElement('script')
    script.src = src

    script.onload = () => callback( null, script )
    script.onerror = () => callback( new Error(`Ошибка загрузки скрипта ${src}`) )

    document.head.append(script)
}

/*
const loadScriptPromise = src => new Promise(
    (resolve,reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script)
        })
    }
)
*/


function promisify(f) {

    return function(...args) {
        return new Promise(( resolve, reject ) => {

            function callback(err, result) {
                if (err) return reject(err)
                else resolve(result)
            }

            args.push(callback)
            f.call(this, ...args)
        })

    }

}

const loadScriptPromise = promisify(loadScript)

loadScriptPromise('file.js')
    .then(console.log)


function promisify(f, manyArgs = false) {

    return function(...args) {

        return new Promise((resolve,reject) => {
            function callback(err, ...results) {
                if (err) {
                    return reject(err)
                } else {
                    resolve(manyArgs ? results : results[0])
                }
            }

            args.push(callback)

            f.call(this, ...args)
        })

    }

}
