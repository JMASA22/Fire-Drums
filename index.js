//DETECTAR BOTÓ/TECLA Q CLICAREM:
var numBotons = document.querySelectorAll(".drum").length;
//var audio = new Audio ("sounds/tom-1.mp3");
//audio.play();

for (var i=0; i<numBotons; i++){

    document.querySelectorAll (".drum")[i].addEventListener("click", function (){
        
        var bottonInnerHtml = this.innerHTML; // this. és el botó q clicarem
        ferSoroll (bottonInnerHtml);
        teclaAnimacio (bottonInnerHtml);

    });
}         

//DETECTAR TECLA CLICADA
document.addEventListener ("keypress", function(event) {
    ferSoroll(event.key);
    teclaAnimacio(event.key);
    // passem el mateix paràmetre (event.key) pq faci referència la mateixa acció (tecla que cliquem)
    // iniciar gif 
    if (event.key) {
        var gifF = document.getElementById('gifF');
        gifF.src = "./images/f.gif";
    }
});

function ferSoroll (key){
    switch (key) { // la cosa q
        case "f":
            var f = new Audio ("sounds/crash.mp3");
            f.play();f
            break;
        
        case "i":
            var i = new Audio ("sounds/kick-bass.mp3");
            i.play();
            break;

        case "r":
            var r = new Audio ("sounds/snare.mp3");
            r.play();
            break;
        
        case "e":
            var e = new Audio ("sounds/tom-1.mp3");
            e.play();
            break;
        
        default: console.log (botoInnerHTml); //bona practica
        
    }

}

// Crear funció activar tecla clicada (teclaAnimacio)
function teclaAnimacio (teclaClicada) { // ara q ja tenim aquest valor "teclaClicada" aquí el podem utilitzar per generar l'animació
    var teclaActiva = document.querySelector ("." + teclaClicada); 
    // ara que ja hem "trobat el botó q clicarem ("document.querySelector ("." + teclaClicada)")
    // li assignem  una variable "botoActivat" - Aquest és el botó q canviarem als estils (CSS)
    // com afegir una classe a un element utilitzant JS: (amb .classList)
    teclaActiva.classList.add("pressed");
    
    // tornar a l'original (opacitat normal un cop clicada la tecla) amb "setTimeout"
    setTimeout (function(){
        teclaActiva.classList.remove("pressed");
    }, 100);
}