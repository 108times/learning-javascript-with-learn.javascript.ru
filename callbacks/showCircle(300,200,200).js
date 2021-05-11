'use strict'






function showCircle(cx, cy, radius, callback) {
    const circles = document.getElementById('circles')
    const circleContainer = document.createElement('div')
    const circle = document.createElement('div')

    circle.appendChild(document.createElement('p'))
    circle.classList.add('circle','show')
    circleContainer.style.position = 'absolute'
    circleContainer.style['width'] = circleContainer.style['height']  = `${radius * 2}px`;
    circleContainer.style.top = `${cy - radius}px`;
    circleContainer.style.left = `${cx - radius}px`;

    circles.append(circleContainer)
    circleContainer.appendChild(circle)
    circle.onanimationend = () => {
        callback( circle )
        console.log('animation ended')
    }


}

