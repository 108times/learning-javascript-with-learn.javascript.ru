function createRipple(event) {

    const button = event.currentTarget
    button.classList.add('clicked')
    setTimeout(() => {
        button.classList.remove('clicked')
    },230)

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (button.offsetTop + radius) }px`
    circle.classList.add('ripple')


    //
    // const ripple = button.getElementsByClassName('ripple')[0]
    // if (ripple) ripple.remove()
    // console.log(ripple)
    button.appendChild(circle)

    // const clone = circle.cloneNode(true)
    // setTimeout(() => button.appendChild(clone), 30)
}

const btns = document.getElementsByClassName('btn')
for (let btn of btns) {
    btn.addEventListener('click', createRipple)
}
