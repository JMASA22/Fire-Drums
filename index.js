var fireworks = ["f", "i", "r", "e", "w", "o", "k", "s"];

var gifCounters = {};

// Preload de audio
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

// Detectar clics als botons
var numBotons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numBotons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        console.log("Botó clicat:", buttonInnerHtml);
        ferSoroll(buttonInnerHtml);
        teclaAnimacio(buttonInnerHtml);
    });
}

// Detectar clics de teclat
document.addEventListener("keydown", function (event) {
    ferSoroll(event.key);
    teclaAnimacio(event.key);
});

function ferSoroll(key) {
    console.log("Reproduint so per a la tecla:", key);
    if (audioFiles[key]) {
        audioFiles[key].play();
    } else {
        console.log("Tecla no reconeguda: " + key);
    }
}

function teclaAnimacio(teclaClicada) {
    console.log("Animant tecla:", teclaClicada);
    var teclaActiva = document.querySelector("." + teclaClicada);
    teclaActiva.classList.add("pressed");

    // Verificar si la tecla clicada está en el array fireworks
    if (fireworks.includes(teclaClicada)) {
        // Obtener el contador de la tecla actual
        var counter = gifCounters[teclaClicada] || 0;

        // Obtener todos los elementos con la clase .gif y la tecla clicada
        var gifElements = document.querySelectorAll("." + teclaClicada + ".gif");

        // Iterar sobre los elementos .gif y agregar la clase para activar el bucle
        gifElements.forEach(function (gifElement, index) {
            // Agregar lógica para reproducir el GIF solo si es la primera vez o el contador actual
            // es igual al índice actual
            if (counter === index) {
                gifElement.classList.add("gif-loop");

                // Agregar lógica para reproducir el GIF
                var gifSrc = gifElement.style.backgroundImage.replace(/url\(["']?(.*?)["']?\)/, "$1");
                var img = new Image();
                img.src = gifSrc;
                img.onload = function () {
                    gifElement.style.backgroundImage = "url('" + gifSrc + "')";
                };
            }
        });

        // Incrementar el contador para la siguiente vez
        gifCounters[teclaClicada] = (counter + 1) % gifElements.length;

        setTimeout(function () {
            // Iterar sobre los elementos .gif y quitar la clase para detener el bucle
            gifElements.forEach(function (gifElement) {
                gifElement.classList.remove("gif-loop");
            });
        }, 100);
    }

    setTimeout(function () {
        teclaActiva.classList.remove("pressed");
    }, 100);
}