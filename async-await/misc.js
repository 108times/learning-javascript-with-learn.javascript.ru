export default {
    $app : document.getElementById('root'),
    printPromise : function(text) {
        text.then(v => {
            const id = `p${performance.now()}-${this.printPromise.number++}`.replace('.','')
            if (Object.prototype.toString.call(v) === '[object HTMLImageElement]') {
                const p = document.createElement('p')
                p.classList.add('appear')
                p.classList.add(id)
                p.append(v)
                this.$app.append(p)
            } else {
                this.$app.innerHTML = this.$app.innerHTML + `<p class="${id} appear">${v}</p>`
            }
            new Promise((res,rej) => {
                setTimeout( () => {
                    res(document.querySelector(`.${id}`))
                }, 200)
            }).then(el => {
                el.classList.remove('appear')
                setTimeout(() => el.classList.add('animate-before'), 200)
            })

        })
    },
    print : function(text) {
        this.$app.innerHTML = this.$app.innerHTML + `<p>${text}</p>`
    },
    delay: function(ms) {
	    return new Promise((resolve,reject) => setTimeout(() => resolve(true), ms))
    }
}
