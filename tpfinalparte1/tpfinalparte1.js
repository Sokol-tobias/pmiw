let fondoX = 640, fondoY = 480;
let txt;
let pantallas = [];
let video , estado = 'intro';

function preload(){
txt = loadStrings ('texto.txt');

for(let i=0; i<=18 ; i++){
    let nombre = "pantalla"+i+".jpeg";
    pantallas.push(loadImage("imagenes/" + nombre));
  }
}

function setup() {
createCanvas (fondoX, fondoY);
video = createVideo('videos/intro.mp4');
video.hide();
video.onended(() => {
  video.hide();
  estado = 'juego';
});
console.log(pantallas.length);
}


function draw() {
background(125);
videos();
cursor('shurikenCursor.png');
}
