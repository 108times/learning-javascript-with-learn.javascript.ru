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
    let MaxSumFinal = 0;
    loop1:for (let i = 0; i < arr.length; i++)
    {
        currentSum = arr[i];
        console.log('Current index is '+i);
        if (currentSum < 0){
            console.log("i is less than 0 at "+arr[i]+" continuing...");
            continue loop1;
        }
        if (currentSum > MaxSumFinal) {
            MaxSumFinal = currentSum;
        }
        MaxSum = arr[i];


        for (let j = i+1; j < arr.length; j++)
        {

            MaxSum += arr[j];
            console.log('MaxSum = ' + MaxSum);
            // if (MaxSum < currentSum) {
            //     continue loop1;
            // }
            if (MaxSum > MaxSumFinal) {
            MaxSumFinal = MaxSum;
            }
            console.log('MaxSumFinal = ' + MaxSumFinal);
        }



    }

    alert(MaxSumFinal);z
}
getMaxSubSum([-1, -2, -3])
getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]) ;
getMaxSubSum([1, 2, 3]);


// Правильное решение
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

