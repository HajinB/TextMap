var textSize = localStorage.getItem("textSize");
var htmlCss = document.getElementsByTagName("html");
if(textSize == null){
    localStorage.setItem("textSize", "medium");
}
else if(textSize == "medium"){
    htmlCss[0].style.fontSize = "medium";
}
else if(textSize == "large"){
    htmlCss[0].style.fontSize = "large";
}
else if(textSize == "x-large"){
   htmlCss[0].style.fontSize = "x-large";
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

function endreTextSize(n) {
    if(n == 0){
        htmlCss[0].style.fontSize = "medium";
    localStorage.setItem("textSize", "medium");
    }
    else if(n == 1){
        htmlCss[0].style.fontSize = "large";
    localStorage.setItem("textSize", "large");
    }
    else if(n == 2){
        htmlCss[0].style.fontSize = "x-large";
    localStorage.setItem("textSize", "x-large");
    }
}


//display: none;
//visibility: hidden;
//var el = document.getElementById('#foo');
//el[i].className += ' my-class'; //


function codeAddress() {
    document.getElementById("textSizeNoJS").style.display = "none";
    document.getElementById("textSizeNoJS").style.visibility = "hidden";


    document.getElementById("textSize").style.display = "block";
    document.getElementById("textSize").style.visibility = "visible";


}
window.onload = codeAddress;