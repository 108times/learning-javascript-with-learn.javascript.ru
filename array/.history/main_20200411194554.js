"use strict";

//// Задачи
//// 1
// let fruits = ["Яблоко","Груша","Апельсин"];
// let shoppinCart = fuits;
// shoppinCart.push("Банан");
// alert (shoppinCart)

// // 2
// let styles = ["Джаз","Блюз"];
// styles.push("Рок-н-ролл");

// let pushMiddle = ( string , array ) => {
//     let middle = Math.round(array.length / 2);
//     let new_array = [];
//     for (let i = 0; i < middle; i++)
//     {
//         new_array.push( array[middle + i] );
//     }
//     array.length = middle;
//     array.push(string);
//     for(let i = 0; i < new_array.length; i++)
//     {
//         array.push(new_array[i]);
//     }
//     return array;
// }
//// styles[Math.floor((styles.length - 1) / 2)] = "Классика"; - правильное решение :)
// alert(pushMiddle("Классика",styles));

// alert(styles.shift());

// styles.shift("Рэп","Рэгги")
// alert(styles);

//// 3
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })
// arr[2]()



function sumInput() {
let ask = true;
let array = [];
let val = "";
while(ask){
    val =  prompt("Введите число","1");
    if (!val || !isFinite(val) || val === null) {
        ask = false;
    }
    else {
        array.push( val );
    }
}
let max = 0;
for (value of array){
max += value;
}

return max;
}

alert(sumInput());
