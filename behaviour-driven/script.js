"use strict";





function getTimeZone(){
    let currentdate = new Date();
    let my_month = currentdate.getMonth()+1;
    let my_date = currentdate.getDate();
    let my_year = currentdate.getMonth();
      let my_hours = currentdate.getHours();
      let my_minutes = currentdate.getMinutes();
      let my_seconds = currentdate.getSeconds();
    let my_full_date = `${my_month} ${my_date} ${my_year} ${my_hours}:${my_minutes}:${my_seconds}`;

    let offset = new Date().getTimezoneOffset();
    let utc_offset = Number(offset)/60;
    let sign = utc_offset < 0 ? "-" : "+"; 
    let new_utc_offset = Math.abs(utc_offset) < 10 ? "0" : "";
    let substr = " GMT" + sign + new_utc_offset + utc_offset +"00"
    my_full_date += substr;
    return my_full_date;
}
console.log(getTimeZone())























// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  


// function getCurrentDateAndTime(day='false') {
//   var currentdate = new Date(); 
//   if (day==='true') {
//     return datetime = currentdate.getDate();
//   }
//   let my_month = string(currentdate.getMonth + 1);
//   let my_month = my_month.length === 1 ? "0" + my_month : my_month;
//   var datetime = currentdate.getFullYear() + ""
//               + my_month + "" 
//               + currentdate.getDate() + ""  
//               + currentdate.getHours() + ""  
//               + currentdate.getMinutes() + "" 
//       + currentdate.getSeconds();
//   return datetime;
// }


// alert(getCurrentDateAndTime('false'));
//   let ask = (question,yes,no) =>{
//     confirm(question) ? yes() : no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


// function pow(x, n) {
//   let result = 1;

//   for (let i=0 ; i<n ; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0){
//   alert(`Степень ${n} не поддерживается, 
//   введите целую степень, большую 0`);
// } else {
//   alert( pow(x,n) );
// }