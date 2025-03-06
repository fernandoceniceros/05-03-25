// Autor: Fernando Ceniceros Quiñones - 2025
// Reproductor de Música con Teclado

// Definición de las canciones y las imágenes
const songs = [
    "cancion1.mp3",
    "cancion2.mp3",
    "cancion3.mp3",
    "cancion4.mp3",
    "cancion5.mp3",
    "cancion6.mp3",
    "cancion7.mp3",
    "cancion8.mp3",
    "cancion9.mp3",
    "cancion10.mp3"
];

const images = [
    "imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg",
    "imagen6.jpg", "imagen7.jpg", "imagen8.jpg", "imagen9.jpg", "imagen10.jpg"
];

let currentSongIndex = 0; // Índice actual de la canción
let currentImageIndex = 0; // Índice actual de la imagen

// Elementos del DOM
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const currentImage = document.getElementById("currentImage");

// Función para cambiar la canción
function changeSong(index) {
    if (index >= 0 && index < songs.length) {
        currentSongIndex = index;
        audioSource.src = songs[currentSongIndex];
        audioPlayer.load();
        audioPlayer.play();
        changeImage(); // Cambiar la imagen al mismo tiempo que se cambia la canción
    }
}

// Función para cambiar la imagen al cambiar de canción
function changeImage() {
    currentImageIndex = currentSongIndex; // La imagen corresponde a la canción
    currentImage.src = images[currentImageIndex];
}

// Función para pausar o reanudar la canción
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Event listeners para el teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A") {
        // Cambiar a la canción anterior
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        changeSong(currentSongIndex);
    } else if (event.key === "s" || event.key === "S") {
        // Pausar o reanudar la canción
        togglePlayPause();
    } else if (event.key === "d" || event.key === "D") {
        // Cambiar a la siguiente canción
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        changeSong(currentSongIndex);
    }
});

// Inicializar la primera canción
changeSong(currentSongIndex);
