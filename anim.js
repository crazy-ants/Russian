// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Moon, A Hole of Light Through The Big Top Tent up High", time: 6 },
    { text: "Here Before And After Me Shinin' Down On Me", time: 16 },
    { text: "Moon, Tell Me if I Could Send Up My heart To You? ", time: 24 },
    { text: "So, When I die, Which I must Do Could It Shine Down Here With You", time: 31 },
    { text: "Cause My Love Is Mine, All Mine I Love, My, My, Mine", time: 41 },
    { text: "Nothing In The World Belongs To Me But My Love, Mine, All Mine, All mine", time: 49 },
    { text: "My Baby Here On Earth Showed Me What My Heart Was Worth", time: 77 },
    { text: "So, When It comes to be my turn Could You Shine It Down Here for Her?", time: 84 },
    { text: "Cause My Love Is Mine, All Mine I Love, My, My, Mine", time: 93 },
    { text: "Nothing In The World Belongs To Me But My Love, Mine, All Mine, All mine", time: 100 },
    { text: "Nothing In The World Is mine For Free But My Love, Mine, All Mine, All Mine", time: 111 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 8
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
        "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
        titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);