
 const btnMenu = document.querySelector('.btn__open')
 const btnClose = document.querySelector('.btn__close')
 const Menu = document.querySelector('.navbar__menu')
 const btnOption = document.querySelector('.navbar__list')
 
 btnMenu.onclick = function (){
     Menu.classList.add('show--menu')
 }
 btnClose.onclick =  function () {
     Menu.classList.remove('show--menu')
 }

 btnOption.onclick = function() {
     Menu.classList.remove('show--menu')
 }