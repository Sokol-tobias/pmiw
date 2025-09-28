let fondoX = 640, fondoY = 480;
let txt;
let pantalla;
function preload(){
txt = loadStrings ('texto.txt');
}

function setup() {
createCanvas (fondoX, fondoY);
console.log(txt);
}


function draw() {
background(125);
cursor('shurikenCursor.png');
}
