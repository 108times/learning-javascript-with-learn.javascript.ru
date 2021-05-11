'use strict'

const button = document.getElementById('button')

button.addEventListener('click',  () => insertCircleWithAnimationAndText('text'))

function loadScript(src, callback) {
    const script = document.createElement('script')
    script.src = src

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`))

    document.head.append(script)
}


function insertCircleWithAnimationAndText(text) {

    loadScript('showCircle(300,200,200).js', () => {
        showCircle(200,200,100, circle => circle.querySelector('p').innerHTML = 'Animation ended')
    })
}

