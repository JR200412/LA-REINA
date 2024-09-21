// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Pregúntame por qué mi corazón está dentro de mi garganta", time: 34 },
  { text: "TNunca he estado enamorado, he estado solo", time: 41 },
  { text: "Siento que he estado viviendo la vida dormido", time: 47 },
  { text: "El amor es tan fuerte que me hace sentir tan débil", time: 53 },
  { text: "¿Te sientes sola? (¿te sientes sola?)", time: 59 },
  { text: "Nuestros dedos bailando cuando se encuentran", time: 63 },
  { text: "Pareces tan sola (te sientes sola?)", time: 67 },
  { text: "Seré el único sueño que busques", time: 72 },
  { text: "Entonces, si te sientes sola, no necesitas mostrarme", time: 77 },
  { text: "Si te sientes sola, ven a sentirte sola conmigo", time: 80 },
  { text: "Sola (¿te sientes sola?)", time: 86 },
  { text: "La pasión se derrumba mientras hablamos", time: 89 },
  { text: "Pareces tan sola (te sientes sola?)", time: 93 },
  { text: "Eres el suelo que mis pies no alcanzarán", time: 98 },
  { text: "Entonces, si te sientes sola, cariño, estás brillando", time: 102 },
  { text: "Si te sientes sola, ven a sentirte sola conmigo", time: 105 },
  { text: "Debajo de la pálida luz de la Luna", time: 119 },
  { text: "Soñando con una vida de circo", time: 127 },
  { text: "Carruseles y alturas de ferris", time: 136 },
  { text: "Seré tuyo si tú eres mía", time: 143 },
  { text: "Porque me siento solo, me siento tan solo", time: 150 },
  { text: "Si me abrazas, seré solo tuyo", time: 154 },
  { text: "¿Te sientes sola? (¿te sientes sola?)", time: 160 },
  { text: "Nuestros dedos bailando cuando se encuentran", time: 163 },
  { text: "Pareces tan sola (te sientes sola?)", time: 166 },
  { text: "Seré el único sueño que busques", time: 170 },
  { text: "Entonces, si te sientes sola, no necesitas mostrarme", time: 174 },
  { text: "Si te sientes sola, ven a sentirte sola conmigo", time: 178 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
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