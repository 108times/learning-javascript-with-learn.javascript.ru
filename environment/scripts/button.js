function makeButton({
        handler = e => e,
        container = null,
        classNames = ['btn', 'btn-default']
} = {}) {
        function styleLine(name, value) {
                return `${name}:${value}`
        }

        const button = document.createElement('button')
        classNames.forEach(item => button.classList.add(item))
        button.onclick = handler
        container ? document.insertAdjacentHTML('beforeend', button) : null

        return button
}

export default makeButton
