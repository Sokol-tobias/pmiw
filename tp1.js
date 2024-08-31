/*
Nombre: Sokol Tobias Ezequiel
 legajo:120375/9
 Comision 5
 link: https://youtu.be/HdZr6KYvy2s
 */
 
 
  let rotacion = false;
  
function preload(){
  pintura=loadImage("data/pintura.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(255);
  noStroke();
  colorActual = color(colorInicial[0], colorInicial[1], colorInicial[2]);
}

function draw() {
  fill(93, 185, 185);
  rect(width / 2, 0, width / 2, height);
  
  if (rotacion === false) {
    circulos();
  } else {
    circulos1();
  }
  
  image(pintura, 0, 0, width / 2, height);
  
  fill(255);
  textSize(15);
  text("presiona 'a' o 'd' para aumentar o disminuir la velocidad.\nPresiona 'r' para cambiar a un color al azar\npresiona barra espaciadora para reiniciar", 10, 10);
}

function mouseClicked() {
  if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 400) {
    rotacion = !rotacion;
    console.log(rotacion);
  }
}
