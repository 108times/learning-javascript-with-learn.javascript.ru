"use strict";

var _fs = require("fs");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arr = new Array(100);
var fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits[0], fruits[1], fruits[2]);
fruits[2] = "Груша";
fruits[3] = "Гранат";
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Арбуз"));
console.log(fruits);
console.log(fruits.unshift("Дыня"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.map(function (item) {
  return "$ ".concat(item, " $").replace("$", "").replace("$", "").trim();
}));

var repl = function repl(e, w) {
  for (var _i = 0; _i < w.length; _i++) {
    e = e.replace(w[_i], "");
  }

  return e;
};

var i = function i(e, w) {
  console.log(_typeof(w));
  return _typeof(w) === "object" ? repl(e, w) : e.replace(w, "");
};

console.log(i("Word id place country", ["Word", "id", "place"]));