function pantalla(){
  if (estado == 'juego'){
  image(pantallas[p],0,0,fondoX,fondoY);
  console.log(p);
  }
}
function keyPressed(){
  if (key=='d'&& p<=18){
    p++;
  }
  if (key=='a'){
    p--;
  }
}
