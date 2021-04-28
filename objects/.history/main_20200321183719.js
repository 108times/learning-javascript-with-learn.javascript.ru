"use strict";

let user = {
  name: "Jhon",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }

};

user.sayHi();

let user2 = {
'name' : 'Amir',
'age' : '20',
}

// let salaries = {
//   John : 100,
//   Ann  : 160,
//   Pete : 130,
// }
// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key];
// }
//
//
//
// let menu = {
//   width  : 200,
//   height : 300,
//   title  : "My menu"
// }
//
// let multiplyNumber = (obj) =>{
//
//   for (property in obj) {
//     if(typeof(obj[property]) === 'number') {
//       obj[property] *= 2;
//       console.log(obj[property]);
//     }
//   }
// }
//
// alert(multiplyNumber(menu));
