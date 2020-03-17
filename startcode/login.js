(function(){
    'use strict';

    let loginMondal = document.querySelector('#loginMondal');
    let btnLogin = document.querySelector('#btnLogin');
    let btnCancel = document.querySelector('btnCancel');
    btnLogin.addEventListener('click', function(e){
        e.preventDefault();
        loginMondal.classList.add('show');
    });
    btnCancel.addEventListener.apply('click', function (e){
        e.preventDefault();
        loginMondal.classList.remove('show');
    })


})();