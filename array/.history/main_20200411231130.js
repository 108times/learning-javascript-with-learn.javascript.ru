"use strict";

//// Задачи
//// 1
// let fruits = ["Яблоко","Груша","Апельсин"];
// let shoppinCart = fuits;
// shoppinCart.push("Банан");
// alert (shoppinCart)

//// 2
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


//// 4
// function sumInput() {
// let ask = true;
// let array = [];
// let val = "";
// while(ask){
//     val =  prompt("Введите число","1");
//     if (val==='' || !isFinite(val) || val === null) {
//         ask = false;
//     }
//     else {
//         array.push( Number(val) );
//     }
// }
// let max = 0;
// for (let value of array){
// max += value;
// }

// return max;
// }

// alert(sumInput());


//// 5
let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr)
{
    let currentSum = 0;
    let MaxSum = 0;
    let SubArray = [];
    loop1:for (let i = 0; i < arr.length; i++)
    {

        currentSum = arr[i];
        console.log("curSum="+arr[i]);
        // SubArray.push("i="+currentSum);
        if (currentSum < 0){
            continue;
        }

        for (let j = i+1; j < arr.length-1; j++)
        {
            console.log('Current j='+j);
            MaxSum += arr[j];
            console.log("MaxSum="+MaxSum);
            if (MaxSum < currentSum) {
                break loop1;
            }
            // SubArray.push("j="+MaxSum);
        }

    }
    // alert(["result="+MaxSum,SubArray]);
    alert(MaxSum);
}
getMaxSubSum([-1, 2, 3, -9]);
