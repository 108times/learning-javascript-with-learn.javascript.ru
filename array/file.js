import { futimesSync } from "fs"

let arr = new Array(100)

let fruits = ["Яблоко","Апельсин","Слива"]
console.log(fruits[0],fruits[1],fruits[2])

fruits[2] = "Груша"
fruits[3] = "Гранат"

console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.push("Арбуз"))
console.log(fruits)

console.log(fruits.unshift("Дыня"))
console.log(fruits)

console.log(fruits.shift())
console.log(fruits)


console.log(fruits.map(item => `$ ${item} $`.replace("$","").replace("$","").trim()))

let repl = (e, w) => {

    for (let i = 0; i<w.length; i++) {
        e = e.replace(w[i],"")
    }
    return e
}

let i = (e, w) => {
    console.log(typeof w)
    return typeof w === "object"
    ? repl(e, w)
    : e.replace(w,"")
}

console.log(i("Word id place country",["Word","id","place"]))
