var textSize = localStorage.getItem("textSize");
var htmlCss = document.getElementsByTagName("html");
var textSizeDrop = document.getElementsByClassName("textSizeDrop")[0];
var textSize = document.getElementById("textSize");
var dropBtn = document.getElementById("dropBtn");
var btnAccept = document.getElementById("btnAccept");
var cookiesBox = document.getElementById("cookiesBox");
var aapenTextSize = Boolean(false);
var valg1 = document.getElementById("size1");
var valg2 = document.getElementById("size2");
var valg3 = document.getElementById("size3");
valg1.style.backgroundColor = "#C2C5CC";
function sjekkSize(){
    if(textSize == null){
        localStorage.setItem("textSize", "medium");
        valg1.style.backgroundColor = "#C2C5CC";
        valg2.style.backgroundColor = "#FFFFFF";
        valg3.style.backgroundColor = "#FFFFFF";
    }
    else if(textSize == "medium"){
        htmlCss[0].style.fontSize = "medium";
        valg1.style.backgroundColor = "#C2C5CC";
        valg2.style.backgroundColor = "#FFFFFF";
        valg3.style.backgroundColor = "#FFFFFF";
    }
    else if(textSize == "large"){
        htmlCss[0].style.fontSize = "large";
        valg1.style.backgroundColor = "#FFFFFF";
        valg2.style.backgroundColor = "#C2C5CC";
        valg3.style.backgroundColor = "#FFFFFF";
    }
    else if(textSize == "x-large"){
        htmlCss[0].style.fontSize = "x-large";
        valg1.style.backgroundColor = "#FFFFFF";
        valg2.style.backgroundColor = "#FFFFFF";
        valg3.style.backgroundColor = "#C2C5CC";
    }
}

var evtTextSize = document.querySelectorAll(".textSizeValg");
for(var i = 0; i < evtTextSize.length; i++){
    var self = evtTextSize[i];
    
    self.addEventListener("click", function(event) {
        event.preventDefault();
        var textValg = event.target;
        var valgIndeks = textValg.getAttribute("data-valg");
        endreTextSize(valgIndeks);
    })
}

for(var i = 0; i < evtTextSize.length; i++){
    var self = evtTextSize[i];
    
    self.addEventListener("keypress", function(e) {
        event.preventDefault();
        if(event.keyCode == 13){
            var textValg = e.target;
            var valgIndeks = textValg.getAttribute("data-valg");
            endreTextSize(valgIndeks);
            dropBtn.blur();
            aapenTextSize = Boolean(false);
            textSizeDrop.style.display = "none";
            dropBtn.setAttribute('aria-expanded', false);
        }
    })
}

document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode == 27 && aapenTextSize) {
        aapenTextSize = Boolean(false);
        textSizeDrop.style.display = "none";
        dropBtn.setAttribute('aria-expanded', false);
    }
};

function endreTextSize(n) {
    if(n == 0){
        htmlCss[0].style.fontSize = "medium";
        localStorage.setItem("textSize", "medium");
        valg1.style.backgroundColor = "#C2C5CC";
        valg2.style.backgroundColor = "#FFFFFF";
        valg3.style.backgroundColor = "#FFFFFF";
    }
    else if(n == 1){
        htmlCss[0].style.fontSize = "large";
        localStorage.setItem("textSize", "large");
        valg1.style.backgroundColor = "#FFFFFF";
        valg2.style.backgroundColor = "#C2C5CC";
        valg3.style.backgroundColor = "#FFFFFF";
    }
    else if(n == 2){
        htmlCss[0].style.fontSize = "x-large";
        localStorage.setItem("textSize", "x-large");
        valg1.style.backgroundColor = "#FFFFFF";
        valg2.style.backgroundColor = "#FFFFFF";
        valg3.style.backgroundColor = "#C2C5CC";
    }
}

dropBtn.onkeypress = function(event) {
    if(event.keyCode == 13 && !aapenTextSize){
        aapenTextSize = Boolean(true);
        textSizeDrop.style.display = "block";
        dropBtn.setAttribute('aria-expanded', true);
    }
    else if(event.keyCode == 13 && aapenTextSize){
        aapenTextSize = Boolean(false);
        textSizeDrop.style.display = "none";
        dropBtn.setAttribute('aria-expanded', false);
    }
}

btnAccept.onclick = function(){
    cookiesBox.style.display = "none";
    localStorage.setItem("cookies", "ja");
}

function sjekkCookies(){
    var cookies = localStorage.getItem("cookies");
    if(cookies == "ja"){
        cookiesBox.style.display = "none";
        sjekkSize();
    }
    else{
        cookiesBox.style.display = "block";
    }
} sjekkCookies();

textSize.onmouseover = function (){
    aapenTextSize = Boolean(true);
    textSizeDrop.style.display = "block";
    dropBtn.setAttribute('aria-expanded', true);
}

textSize.onmouseout = function (){
    aapenTextSize = Boolean(false);
    textSizeDrop.style.display = "none";
    dropBtn.setAttribute('aria-expanded', false);
}

//display: none;
//visibility: hidden;
//var el = document.getElementById('#foo');
//el[i].className += ' my-class'; //


/*
const topLevelLink = document.querySelectorAll('.txtControls');
console.log(topLevelLink);

topLevelLink.forEach(link => {
    if (link.nextElementSibling) {
      link.addEventListener('focus', function() {
        this.parentElement.classList.add('focus')
      })
  
      const subMenu = link.nextElementSibling
      const subMenuLinks = subMenu.querySelectorAll('li')
      const lastLinkIndex = subMenuLinks.length - 1
      const lastLink = subMenuLinks[lastLinkIndex]
  
      lastLink.addEventListener('blur', function() {
        link.parentElement.classList.remove('focus')
      })
    }
  })
*/

function hvisJShide() {
    document.getElementById("textSizeNoJS").style.display = "none";
    document.getElementById("textSizeNoJS").style.visibility = "hidden";


    document.getElementById("textSize").style.display = "inline-block";
    document.getElementById("textSize").style.visibility = "visible";


}hvisJShide();





