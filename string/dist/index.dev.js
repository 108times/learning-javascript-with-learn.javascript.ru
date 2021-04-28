"use strict";

var str = "  String  ";
console.log(str.trim().repeat(4));
console.log(str.trim().concat("Qwe", "EEr"));
var sentence = "Today's weather is very nice!";
console.log(sentence.split(" "));
console.log(str.anchor("QWE"));
console.log(str.blink());

function ucFirst(str) {
  if (!str) return str;
  var firstLetter = str[0].toUpperCase();
  var rest = str.slice(1);
  return firstLetter + rest;
}

console.log(ucFirst("console"));
console.log(ucFirst("io"));
console.log(ucFirst(""));

function checkSpam(str) {
  return str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX') ? true : false;
}

console.log(checkSpam('buy ViAgrA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function checkSpam2(str) {
  var lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam2('buy ViAgrA now'));
console.log(checkSpam2('free xxxxx'));
console.log(checkSpam2('innocent rabbit'));

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему", 20));

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("@120"));

function toCamelCase(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2);
    }
  }

  return str;
}

console.log(toCamelCase("this_is_a_function"));
console.log(toCamelCase("q-w-e"));