//VictorioOcantoParte1 https://youtu.be/xrKI5iJW_FE
//TobiasSokolParte1 https://youtu.be/dyY5u5z6upY
let imagenes = [23], p=0; // arreglo para almacenar las imágenes
let Px=640, Py=480; //tamaño pantalla
let boton = [];
let texto=[], t=0;
let opcionSi, opcionNo;
let sonido;

function preload() {
   for(let i=0; i<=23; i++){
  imagenes[i]= loadImage('pantallas/img'+ i +'.jpg');
}
  boton[0]=loadImage('botones/comenzar.png');
  boton[1]=loadImage('botones/siguiente.png');
  boton[2]=loadImage('botones/reiniciar.png');
  boton[3]=loadImage('botones/si.png');
  boton[4]=loadImage('botones/no.png');
  boton[5]=loadImage('botones/afuera.png');
  boton[6]=loadImage('botones/adentro.png');
  boton[7]=loadImage('botones/sinRiesgo.png');
  boton[8]=loadImage('botones/arriesgar.png');
  texto=loadStrings('Texto.txt');
  sonido=loadSound('sonido/auto.mp3');
}

function lineastxt(){
  push();
  fill(0, 0, 0, 150);
  rect(5, 5, Px-10, Py/4);
  pop();
    text(texto[t], 10, 10, Px-20, Py-20);
}
function setup() {
createCanvas(Px,Py);
background (155);
textAlign(CENTER, TOP);
textSize(24);
fill(255);
 opcionSi = { x: Px / 3 - 60, y: Py / 2, ancho: 80, alto: 40 };
 opcionNo = { x: Px / 1.5 + 60, y: Py / 2, ancho: 80, alto: 40 };
}

function draw() {
  //pantalla inicio 
  if(p<1){
      image(imagenes[p], 0, 0, Px, Py);
  push();
   imageMode(CENTER);
   image(boton[0],Px/2,Py-boton[0].height);
  pop();
   text('Créditos',10,10,Px-5, Py-20);
    }
//creditos
    else if(p==50){
    image(imagenes[0], 0, 0, Px, Py)
     push();
      fill(0, 0, 0, 150);
      rect(0, Py/1.5, Px-10, Py-10);
    pop();
    rect();
    text('Alumnos: \n Sokol Tobias Ezequiel 120375/9 \n Ocanto Victoria 120350/9 \n autor: \n Jason Hall y Alex Tse',Px/2,Py/1.5);
    text('Créditos',10,10,Px-5, Py-20);
    }
//pantallas con boton siguiente
    else if(p>0 && p<23 && p!=3 && p!=7 && p!=12 && p!=10 && p!=17 && p!=20){
    image(imagenes[p], 0, 0, Px, Py);
    lineastxt();
    push();
   image(boton[1],Px-boton[1].width/2,Py-boton[1].height/2,boton[1].width/2,boton[1].height/2);
    pop();
  }
  //pantallas reiniciar
    else if(p==23 || p==7 || p==12 || p==20){
   image(imagenes[p], 0, 0, Px, Py);
   lineastxt()
  push();
   imageMode(CENTER);
   image(boton[2],Px/2,Py-boton[0].height);
  pop();
  }
  //primera decision
  else if(p==3){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton si
   push();
   imageMode(CENTER);
     image(boton[3],Px,Py/2);
   pop();
 }else if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton no
    push();
     imageMode(CENTER);
     image(boton[4],0,Py/2);
    pop(); 
   }
}
 //segunda decision
 else if(p==10){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton afuera
   push();
   imageMode(CENTER);
     image(boton[5],Px-boton[5].width,Py/2,boton[5].width/2,boton[5].height/2);
   pop();
 }else if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton adentro
    push();
     imageMode(CENTER);
     image(boton[6],boton[6].width,Py/2,boton[6].width/2,boton[6].height/2);
    pop(); 
   }
}
 //tercera decision
 else if(p==17){
 image(imagenes[p], 0, 0, Px, Py);
 lineastxt();
 if(mouseX<Px/2 && mouseX<=Px && mouseY < Py){ //boton arriesgar
   push();
   imageMode(CENTER);
     image(boton[8],Px-boton[8].width,Py/2,boton[8].width/2,boton[8].height/2);
   pop();
 }else if(mouseX>Px/2 && mouseX<=Px && mouseY < Py){ //boton sin riesgo
    push();
     imageMode(CENTER);
     image(boton[7],boton[7].width,Py/2,boton[7].width/2,boton[7].height/2);
    pop(); 
    }
  }
}
