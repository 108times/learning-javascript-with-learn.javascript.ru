'use strict'

!function() {

    function loadScript(src, callback) {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => callback(script)
        document.head.append(script)
    }

    console.log('start -> load script.js')

    loadScript('script.js', script => {
        let otherScript = 'otherScript.js'
        console.log(`${script.src} loaded, now loading ${otherScript}`)
        loadScript('otherScript.js', script => {
            console.log(`${script.src} was also loaded`)
        })
    })

}//()


!function () {
    function loadScript(src, callback) {
        const script = document.createElement('script')
        script.src = src

        script.onload = () => callback(null, script)
        script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`))

        document.head.append(script)
    }

    loadScript('other.js', function(error, script){
            if (error instanceof Error) {
                alert(error )
            } else {
                alert(`скрипт ${script} успешно загружен!`)
            }
    })

}()


