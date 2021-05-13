'use strict'
// 1
/*
function delay(ms) {
    return new Promise(resolve  => setTimeout(resolve, ms))
}

delay(1000).then(() => alert('finished after 1 seconds'))
 */


// 2

function getRandomColor() {
    const colors = ['green','blue','dodgerblue','red','yellow','black','darkblue', 'violet']
    return colors[ Math.trunc((Math.random() * Date.now()) % colors.length - 1) ]
}

function showCircle(cx, cy, radius) {
    let zindex = 1
    return new Promise( (resolve, reject) => {
        const circles = document.getElementById('circles')

        const circleContainer = document.createElement('div')
              circleContainer.style.width = circleContainer.style.height = `${radius * 2}px`
              circleContainer.style.top = `${cy - radius}px`
              circleContainer.style.left = `${cx - radius}px`
              circleContainer.style.position = `fixed`

        const circle = document.createElement('div')
              circle.classList.add('circle', 'show')
              circle.style['background-color'] = `${getRandomColor()}`
              circle.onanimationend = () => resolve(circle)
              circle.style['z-index'] = zindex++
        circleContainer.appendChild(circle)
        circles.append(circleContainer)
    })
}





const button = document.getElementById('button')
    .addEventListener('click', () => {
        showCircle(400,400,100)
            .then(
                circle => {
                    circle.append('Hello world!')
                }
            )
    })
