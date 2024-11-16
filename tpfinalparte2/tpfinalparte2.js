// Tobias Ezequiel Sokol 120375/9
let pantalla = 1;
let nave, balas = [], fragmentos = [], obstáculos = [];
let juegoTerminado = false;
let gano = false;
let botonComenzar, botonCreditos, botonInstrucciones, botonVolver;
let imagenes = {};
let sonido;

function preload() {
  imagenes["inicio"] = loadImage("data/img1.jpg");
  imagenes["juego"] = loadImage("data/img2.jpg");
  imagenes["creditos"] = loadImage("data/img4.jpg");
  imagenes["instrucciones"] = loadImage("data/img3.jpg");
  sonido=loadSound("data/sonido.mp3");
}

function setup() {
  createCanvas(640, 480);
  crearBotones();
  iniciar();
}

function draw() {
  if (pantalla === 1) {
    image(imagenes["inicio"], 0, 0, width, height);
    mostrarInicio();
  } else if (pantalla === 2) {
    image(imagenes["juego"], 0, 0, width, height);
    actualizarJuego();
    if (keyIsPressed) {
      nave.teclaPresionada();
    }
  } else if (pantalla === 3) {
    image(imagenes["creditos"], 0, 0, width, height);
    mostrarCreditos();
  } else if (pantalla === 4) {
    image(imagenes["instrucciones"], 0, 0, width, height);
    mostrarInstrucciones();
  }
}
