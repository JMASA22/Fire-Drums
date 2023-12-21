var fireworks = ["f", "i", "r", "e", "w", "o", "r", "k", "s"];

var gifCounters = {};

// precàrrega de l'audio
var audioFiles = {
    f: new Audio("sounds/crash.mp3"),
    i: new Audio("sounds/kick-bass.mp3"),
    r: new Audio("sounds/snare.mp3"),
    e: new Audio("sounds/tom-1.mp3"),
    w: new Audio("sounds/crash.mp3"),
    o: new Audio("sounds/tom-2.mp3"),
    k: new Audio("sounds/crash.mp3"),
    s: new Audio("sounds/tom-3.mp3")
};

var buttonStates = {
    f: false,
    i: false,
    r: false,
    e: false,
    w: false,
    o: false,
    k: false,
    s: false
  };

// Detectar clics als botons
var buttons = document.querySelectorAll(".drum");

// Només canvia si l'estat es actiu
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        ferSoroll(buttonInnerHtml);
        teclaAnimacio(buttonInnerHtml);
        toggleImage(buttonInnerHtml);
    });
});

// Detectar clics de teclat
document.addEventListener("keydown", function (event) {
    ferSoroll(event.key);
    teclaAnimacio(event.key);
    toggleImage(event.key);
});

function ferSoroll(key) {
    console.log("Reproduint so per a la tecla:", key);
    if (audioFiles[key]) {
        audioFiles[key].play();
    } else {
        console.log("Tecla no reconeguda: " + key);
    }
}

// Funció per canviar la visibilibiitat de la img i el fons del botó
function toggleImage(key) {
    var image = document.getElementById("gif" + key.toUpperCase());
    var button = document.querySelector("." + key);

    // Cambia la visibilidad de la imagen només al botó clicat
    if (image.style.display === "none" || image.style.display === "") {
        image.style.display = "block";
        button.style.backgroundImage = "url('" + image.src + "')";
        buttonStates[key.toLowerCase()] = true; // estat actiu
    } else {
        image.style.display = "none";
        button.style.backgroundImage = "none";
        buttonStates[key.toLowerCase()] = false; // estat inactiu
    }
}

function teclaAnimacio(teclaClicada) {
    console.log("Animant tecla:", teclaClicada);
    var teclaActiva = document.querySelector("." + teclaClicada);
    
    if (teclaActiva) {
      teclaActiva.classList.add("pressed");
    };
  
      setTimeout(function () {
        teclaActiva.classList.remove("pressed");
      }, 200);
    }
