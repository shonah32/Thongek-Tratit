const hamburger = document.querySelector('.hamburger'); 
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function(){
    this.classList.toggle('close'); 
    nav.classList.toggle('revealNav'); 
    menu.classList.toggle('revealItems'); 
})

