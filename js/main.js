var textSize = localStorage.getItem("textSize");
var htmlCss = document.getElementsByTagName("html");
var valg1 = document.getElementById("size1");
var valg2 = document.getElementById("size2");
var valg3 = document.getElementById("size3");
function sjekkSize(){
    if(textSize == null){
        localStorage.setItem("textSize", "medium");
        valg1.style.backgroundColor = "#DDCBDD";
        valg2.style.backgroundColor = "#FFEDFF";
        valg3.style.backgroundColor = "#FFEDFF";
    }
    else if(textSize == "medium"){
        htmlCss[0].style.fontSize = "medium";
        valg1.style.backgroundColor = "#DDCBDD";
        valg2.style.backgroundColor = "#FFEDFF";
        valg3.style.backgroundColor = "#FFEDFF";
    }
    else if(textSize == "large"){
        htmlCss[0].style.fontSize = "large";
        valg1.style.backgroundColor = "#FFEDFF";
        valg2.style.backgroundColor = "#DDCBDD";
        valg3.style.backgroundColor = "#FFEDFF";
    }
    else if(textSize == "x-large"){
        htmlCss[0].style.fontSize = "x-large";
        valg1.style.backgroundColor = "#FFEDFF";
        valg2.style.backgroundColor = "#FFEDFF";
        valg3.style.backgroundColor = "#DDCBDD";
    }
}sjekkSize();

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

function endreTextSize(n) {
    if(n == 0){
        htmlCss[0].style.fontSize = "medium";
        localStorage.setItem("textSize", "medium");
        valg1.style.backgroundColor = "#DDCBDD";
        valg2.style.backgroundColor = "#FFEDFF";
        valg3.style.backgroundColor = "#FFEDFF";
    }
    else if(n == 1){
        htmlCss[0].style.fontSize = "large";
        localStorage.setItem("textSize", "large");
        valg1.style.backgroundColor = "#FFEDFF";
        valg2.style.backgroundColor = "#DDCBDD";
        valg3.style.backgroundColor = "#FFEDFF";
    }
    else if(n == 2){
        htmlCss[0].style.fontSize = "x-large";
        localStorage.setItem("textSize", "x-large");
        valg1.style.backgroundColor = "#FFEDFF";
        valg2.style.backgroundColor = "#FFEDFF";
        valg3.style.backgroundColor = "#DDCBDD";
    }
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

/*
var textSizeButton = document.querySelectorAll('textSizeDrop');

function toggleTextSize(){
      
            console.log("gahhh");
            textSizeButton.setAttribute('aria-expanded', "true");
}
 */


function hvisJShide() {
    document.getElementById("textSizeNoJS").style.display = "none";
    document.getElementById("textSizeNoJS").style.visibility = "hidden";


    document.getElementById("textSize").style.display = "inline-block";
    document.getElementById("textSize").style.visibility = "visible";


}
window.onload = hvisJShide;





/* skru av og på classes */
function textSizeDropDown() {
    document.getElementById("textSizeDropDown").classList.toggle("show");
    var x = document.getElementById("dropbtn").getAttribute("aria-expanded"); 
    if (x == "true") 
    {
    x = "false"
    } else {
    x = "true"
    }
    document.getElementById("dropbtn").setAttribute("aria-expanded", x);
    document.getElementById("textSize").setAttribute("aria-expanded", x);
  }
  
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var dropdowns = document.getElementById("textSizeDropDown");
    if (evt.keyCode == 27) {
       
       /* if (dropdowns.classList.contains('show')) {
          dropdowns.classList.remove('show');
        } */
        alert('Esc key pressed.');
    }
};



  // PRØVER Å FJERNE FOKUS NÅR DEN TABBES VIDERE Burde legge til escape key her - eller en egen function ??
  document.getElementById('textSizeDropDown').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("textSizeDropDown").setAttribute('aria-expanded', "true");
    var target = document.getElementById('size1');
    target.setAttribute('tabindex', '-1');
    target.focus();
  });




  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }