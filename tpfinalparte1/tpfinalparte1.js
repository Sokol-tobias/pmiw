let imagenes = [23], p=0; // arreglo para almacenar las imágenes
let Px=640, Py=480; //tamaño pantalla
let boton = [1];

function preload() {
   for(let i=0; i<=23; i++){
  imagenes[i]= loadImage('pantallas/img'+ i +'.jpg')
}
  boton[0]=loadImage('botones/comenzar.png');
  boton[1]=loadImage('botones/siguiente.png');
}


function setup() {
createCanvas(Px,Py);
background (155);

}

function draw() {
   if(p<1){
      image(imagenes[0], 0, 0, Px, Py);
      push()
   imageMode(CENTER);
   image(boton[0],Px/2,Py-boton[0].height);
  pop()
    }else if(p>0){
    image(imagenes[p], 0, 0, Px, Py);
    push()
     imageMode(CENTER);
   image(boton[1],Px-boton[1].width/3,Py-boton[1].height/3,boton[1].width/2,boton[1].height/2);
    pop()  
  }
}

function mouseClicked(){
if(p==0 || p==24 & mouseX<Px/2+boton[0].width/2 & mouseX>Px/2-boton[0].width/2 & mouseY<Py-boton[0].height/2 & mouseY>Py-boton[0].height*1.5){
  p = (p + 1) % imagenes.length; 
  console.log ('estas dentro',p)
    }else if (p>=1 || p<=22){
        console.log ('estas dentro',p)
        p = (p + 1) % imagenes.length;
    }
  }
