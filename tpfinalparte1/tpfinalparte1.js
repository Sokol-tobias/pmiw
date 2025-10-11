let fondoX = 640, fondoY = 480;
let txt, fuente;
let pantallas = [], estado = 'intro', p = 0, puntosDeDecision = [2, 4, 5, 10, 16]; //p de decision
let video, videoFinalB, videoFinalBR;
let tiempoInicio;
let duracionPantalla = 4000, duracionPantalla1 = 3500, duracionDecision = 2500; 

function preload() {
  txt = loadStrings ('texto.txt');
  cargarVideos();
  fuente = loadFont('PORKYS.TTF');
  for (let i=0; i<=18; i++) {
    let nombre = 'pantalla'+i+'.jpeg';
    pantallas.push(loadImage("imagenes/" + nombre));
  }
}

function setup() {
  createCanvas (fondoX, fondoY);
  round();
  tiempoInicio = millis();
  console.log(estado);
  console.log(pantallas.length);
}


function draw() {
  background(125);
  cursor('shurikenCursor.png');
  videos(); 
  pantalla();
  mostrarTextoJuego();
  console.log(estado, p,Math.round((millis())/1000));
}
