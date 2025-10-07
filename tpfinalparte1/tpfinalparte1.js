let fondoX = 640, fondoY = 480;
let txt;
let pantallas = [];
function preload(){
txt = loadStrings ('texto.txt');
for(let i=0; i<=pantallas.length ; i++){
    let nombre = "pantalla"+i+".jpeg";
    pantallas.push(loadImage("imagenes/" + nombre));
  }
}

function setup() {
createCanvas (fondoX, fondoY);
console.log(pantallas.length);
}


function draw() {
background(125);
cursor('shurikenCursor.png');
}
