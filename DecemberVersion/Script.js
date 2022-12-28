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


//----- FUNCTIONS ----- 

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


  function TableDisplay(modalName){
    const outputTable = document.getElementById(modalName);

    if (outputTable.style.display === "none"){
        outputTable.style.display = "block";
    }
    else{
        outputTable.style.display = "none";
}}


function displayData(num){
    if(num == 1){
        document.getElementById("areasPracTratit").style.display = "none";
        document.getElementById("workExpTratit").style.display = "block"; 

        expBtn.classList.add("active");
        areasPracBtn.classList.remove("active");
    }
    else if(num == 2){
        document.getElementById("workExpTratit").style.display = "none";
        document.getElementById("areasPracTratit").style.display = "block";

        expBtn.classList.remove("active");
        areasPracBtn.classList.add("active");
        
    }
} 

function changePlus1(){
    var symbol = document.getElementById("propPlus").innerHTML;
    if(symbol == "&nbsp;+"){
        document.getElementById("propPlus").innerHTML = "&nbsp;-"
    }
    else{
        document.getElementById("propPlus").innerHTML = "&nbsp;+"
    }

}

function changePlus2(){
    var symbol = document.getElementById("antiPlus").innerHTML;
    if(symbol == "&nbsp;+"){
        document.getElementById("antiPlus").innerHTML = "&nbsp;-"
    }
    else{
        document.getElementById("antiPlus").innerHTML = "&nbsp;+"
    }

}

function changePlus3(){
    var symbol = document.getElementById("discPlus").innerHTML;
    if(symbol == "&nbsp;+"){
        document.getElementById("discPlus").innerHTML = "&nbsp;-"
    }
    else{
        document.getElementById("discPlus").innerHTML = "&nbsp;+"
    }

}

function stopScroll(){
    var burger = document.getElementById("burger"); 
    if(burger.classList.contains("clicked")){
        burger.classList.remove("clicked"); 
        document.getElementById("bod").style.overflow = "scroll";
    }
    else{
        burger.classList.add("clicked"); 
        document.getElementById("bod").style.overflow = "hidden";
    }
    
}

