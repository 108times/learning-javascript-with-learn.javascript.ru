'use strict'


let fruit = 'apple'
let o = 'O'
var a = 'a'
function isApple() {
    console.log(fruit)
    return fruit === 'apple'
}

function isOrange() {
    let fruit = 'orange'
    console.log(isApple())
}
isOrange()


function applePrice() {
    let fruit = 'apple'
    let price = 10
    let discount = 0.05
    let isFresh = true

    return {
        getPrice: function() {
            return price
        },
        setFruit: function (newFruit) {
            fruit = newFruit
        },
        getFruit: function () {
            return fruit
        },
        getCost: function () {
            return price - discount
        },
        setPrice: function(newPrice) {
            price = newPrice
        },
        setDiscount: function(newDiscount) {
            discount = newDiscount
        },
        getDiscount: function() {
            return discount
        }
    }
}

const price = applePrice()
price.setPrice(20)
price.setDiscount(5)
price.setFruit('orange')
console.log(price.getPrice())
console.log(price.getFruit())
console.log(price.getCost())
