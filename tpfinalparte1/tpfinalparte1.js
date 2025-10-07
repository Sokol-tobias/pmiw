let fondoX = 640, fondoY = 480;
let txt;
let pantallas = [] , estado = 'intro', p= 0;
let video;

function preload(){
txt = loadStrings ('texto.txt');

for(let i=0; i<=18 ; i++){
    let nombre = 'pantalla'+i+'.jpeg';
    pantallas.push(loadImage("imagenes/" + nombre));
  }
}

function setup() {
createCanvas (fondoX, fondoY);
console.log(estado);
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
cursor('shurikenCursor.png');
videos();
console.log(estado);
pantalla();
}
