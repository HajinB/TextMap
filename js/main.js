
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
    var textSizeDrop = document.getElementById("textSizeDrop");
    if(n == 0){
        textSizeDrop.style.fontSize = "0.5em";
    }
    else if(n == 1){
        textSizeDrop.style.fontSize = "1em";
    }
    else if(n == 2){
        textSizeDrop.style.fontSize = "1.5em";
    }
    else if(n == 3){
        textSizeDrop.style.fontSize = "2em";
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
