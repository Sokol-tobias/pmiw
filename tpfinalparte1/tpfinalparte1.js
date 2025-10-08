let fondoX = 640, fondoY = 480;
let txt, fuente;
let pantallas = [], estado = 'intro', p = 0;
let video;
let tiempoInicio;
let duracionPantalla = 4000; 

function preload() {
  txt = loadStrings ('texto.txt');
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
  video = createVideo('videos/intro.mp4');
  video.hide();
  video.onended(() => {
    video.hide();
    estado = 'inicio';
  }
  );
  console.log(pantallas.length);
}


function draw() {
  background(125);
  cursor('shurikenCursor.png');
  videos();
  console.log(estado, p,Math.round((millis())/1000));
  pantalla();
}
