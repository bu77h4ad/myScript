// ==UserScript==
// @name         Rawlog Onyma IPTV
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Andrey.I.Apanasenko@south.rt.ru
// @match        */onyma/main/clsrv.htms*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //alert("asdasd");
    var e1 = document.querySelector('#prop\\[8545\\]');

    if (e1.value =='') { //если мака нет в строке
        e1.style.backgroundColor = 'rgb(245 193 192)'

    } else { //если мак в строке есть
        e1.style.backgroundColor = 'rgb(193 245 192)'
        var newElem = document.createElement('a');
        newElem.href ='http://10.63.1.2:4000/rawlog/%D0%AE%D0%B3?mac='+e1.value;
        newElem.textContent = 'Rawlog';
        newElem.target = "_blank";
        e1.after(newElem);
    }
    //alert(e1.value);

})();