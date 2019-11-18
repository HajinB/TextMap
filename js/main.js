
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
    var htmlCss = document.getElementsByTagName("html");
    if(n == 0){
        htmlCss[0].style.fontSize = "medium";
    }
    else if(n == 1){
        htmlCss[0].style.fontSize = "large";
    }
    else if(n == 2){
        htmlCss[0].style.fontSize = "x-large";
    }
}

/*
document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.getElementById('controls');
    target.setAttribute('tabindex', '-1');
    target.focus();
  });

  */
