"use strict";


function output () {
const container = document.getElementById('message');
      container.innerText = mainFunction();
}


function mainFunction () {
    let result ;
    result = Math.round( Math.random() * 255 );
    return String(result);
}


(function(){
    const button = document.getElementById("action");
        button.addEventListener('click',function() {
            output();
            if (isSignedIn == false) {
                logIn()
            } else {
                alert("Вы уже вошли!")
            }
        })
})();




let isSignedIn = false;

let currentUser;

const logIn = () => {

    const login = prompt("Кто там?","Логин");

    if (login==null || login=="") {

        alert("Отменено")

    } else if (login == "Админ") {

        const password = prompt("Введите пароль:","Пароль");

        if(password==null || password=="") {
            alert("Отменено")
        } else if (password == "Я Главный") {
            alert("Здравствуйте!")
            isSignedIn = true
            currentUser = "Админ"
        } else {
            alert("Не правильный пароль!")
        }

    } else {

        alert("Я вас не знаю!")

    }

}




