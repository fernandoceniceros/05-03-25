// Autor: Fernando Ceniceros Quiñones - 2025
// Reproductor de Música con Transición de Imágenes

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
    "imagen6.jpg", "imagen7.jpg", "imagen8.jpg", "imagen9.jpg", "imagen10.jpg",
    "imagen11.jpg", "imagen12.jpg", "imagen13.jpg", "imagen14.jpg", "imagen15.jpg"
];

let currentSongIndex = 0; // Índice actual de la canción
let currentImageIndex = 0; // Índice actual de la imagen

// Elementos del DOM
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const currentImage = document.getElementById("currentImage");

// Función para cambiar la canción
function changeSong(index) {
    if (index >= 0 && index < songs.length) {
        currentSongIndex = index;
        audioSource.src = songs[currentSongIndex];
        audioPlayer.load();
        audioPlayer.play();
    }
}

// Función para cambiar la imagen cada 30 segundos
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    currentImage.src = images[currentImageIndex];
}

// Botón "Anterior"
prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong(currentSongIndex);
});

// Botón "Siguiente"
nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong(currentSongIndex);
});

// Inicializar la primera canción
changeSong(currentSongIndex);

// Cambiar la imagen cada 30 segundos (30000ms)
setInterval(changeImage, 30000);
