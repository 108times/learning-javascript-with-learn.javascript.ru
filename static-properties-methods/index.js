'use strict'

class Article {
    constructor(title, date) {
        this.title = title
        this.date = date
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date
    }

    static createTodays() {
        return new Article('Today\'s digest', new Date())
    }
}

const articles = [
    Article.createTodays(),
    new Article('HTML', new Date(2020, 1, 1)),
    new Article('CSS', new Date(2020,0,1)),
    new Article('JS', new Date(2020, 11, 1))
]

articles.sort(Article.compare)

console.log(articles[0].title)
console.log(articles)



class Animal {
    constructor( name, speed ) {
        this.name = name
        this.speed = speed
    }

    run( speed = 0 ) {
        this.speed += speed
        console.log( `${ this.name } runs at ${ this.speed } speed!` )
    }

    static compare( A, B ) {
        return A.speed - B.speed
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`)
    }
}

const rabbits = [
    new Rabbit('White Rabbit', 10),
    new Rabbit('Dark Rabbit', 5)
]

rabbits.sort(Rabbit.compare)

rabbits[0].run()