/* 

document.querySelector ("button").addEventListener("click", ferClick);
// no posem els parèntesis darera de la funció per cridar-la - No: ferClick() Sí:ferClick
// primer parametre el type (aquí click)
// el segon és el listener aquel que cridarà per fer l'acció (aquí funció ferClick)

function ferClick(){
    alert("He fet click");
}

amb funció anònima fa el mateix:

document.querySelector ("button").addEventListener("click", function (){
    alert("He fet click");
});

*/

//pq surti alerta a tots el botons no només el primer comencem amb un bucle "for" - sempre comença amb: var i=0; i< el q sigui , i++

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

});

// Crear nova funció activar audio (ferSoroll)
// var audio = new Audio ("sounds/tom-1.mp3");
// audio.play();

function ferSoroll (key){
    switch (key) { // la cosa q
        case "w":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
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