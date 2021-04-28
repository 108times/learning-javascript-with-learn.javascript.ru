"use strict";

// Задачи
// 1
let fruits = ["Яблоко","Груша","Апельсин"];
let shoppinCart = fuits;
shoppinCart.push("Банан");
alert (shoppinCart)

// 2
let styles = ["Джаз","Блюз"];
styles.push("Рок-н-ролл");

let pushMiddle = ( string , array ) => {
    let middle = Math.floor(array.length / 2);
    let new_array = [];
    for (let i = 0; i < middle; i++)
    {
        new_array[i] = array[middle + i];
    }
}
