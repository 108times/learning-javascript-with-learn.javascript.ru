"use strict";





// let ladder = {
//     step : 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () {
//         alert(this.step);
//         return this;
//     }
// };
// ladder.up().up().down().up().down().showStep();

// let calculator = {
//     num1: 0,
//     num2: 0,
//     read: function ( n1, n2) {
//         this.num1 = n1;
//         this.num2 = n2;
//     },
//     sum: function () {
//         return(this.num1 + this.num2);
//     },
//     mul: function () {
//         return(this.num1 * this.num2);
//     }
// };

// calculator.read(10,24);

// alert(calculator.sum());
// alert(calculator.mul());


// --------------- 1 -----------------

// let user = {
//     name: 'John',
//     go  : function () { alert(this.name) }
// };
//
// (user.go)();




// --------------- 2 ----------------------

// let obj, method;
//
// obj = {
//     go: function () {
//         alert(this);
//     }
// };
//
// obj.go();
//
// (obj.go)();
//
// (method = obj.go)();
//
// (obj.go || obj.stop)();