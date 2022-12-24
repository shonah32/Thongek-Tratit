const hamburger = document.querySelector('.hamburger'); 
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function(){
    this.classList.toggle('close'); 
    nav.classList.toggle('revealNav'); 
    menu.classList.toggle('revealItems'); 
})

const moreTextBtn = document.querySelector('.moreTextBtn');
const text = document.querySelector('.text');
moreTextBtn.addEventListener('click',(e)=>{
    text.classList.toggle('showMore')
})

var iconTracker = "plus";
var iconTracker2 = "plus";
var iconTracker3 = "plus";

function changeImage(){
    var icon = document.getElementById('plusImage');
   if(iconTracker == "plus"){
    icon.src = "orangeMinus.png"; 
    iconTracker = "minus"; 
   }
   else{
    icon.src = "orangePlus2.png";
    iconTracker = "plus"; 
   }

}

function changeImage2(){
    var icon = document.getElementById('plusImage2');
   if(iconTracker2 == "plus"){
    icon.src = "orangeMinus.png"; 
    iconTracker2 = "minus"; 
   }
   else{
    icon.src = "orangePlus2.png";
    iconTracker2 = "plus"; 
   }

}

function changeImage3(){
    var icon = document.getElementById('plusImage3');
   if(iconTracker3 == "plus"){
    icon.src = "orangeMinus.png"; 
    iconTracker3 = "minus"; 
   }
   else{
    icon.src = "orangePlus2.png";
    iconTracker3 = "plus"; 
   }

}

function showImage() {
    const policy = document.getElementById("policyImage");
    if (policy.style.display === "block") {
        policy.style.display = "none";
    } else {
        policy.style.display = "block";
    }
  }


  function showDisclaimer() {
    var disclaimer = document.getElementById("disclaimer");
    if (disclaimer.style.display === "block") {
        disclaimer.style.display = "none";
    } else {
        disclaimer.style.display = "block";
    }
  }
