'use strict';

let vars = {};

function testPrint(word) {
    const printBlock = document.getElementById('printThere');
    let index = 0;
     while (index <= 20) {
        setInterval( function() {

            printBlock.innerText += word + index + "\n";
            index++;

        }, 400);
 }
}

(function() {



testPrint('apple');

})();
