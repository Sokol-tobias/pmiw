function mouseReleased(){
//Créditos
if(p!=50 && mouseX > Px/2 -textWidth('Créditos') && mouseX < Px/2 + textWidth('Créditos') && mouseY > 10 && mouseY < 10 + textSize('Créditos')){
p=50;
console.log('Créditos',p);
}
else if (p==50 && mouseX > Px/2 -textWidth('Créditos') && mouseX < Px/2 + textWidth('Créditos') && mouseY > 10 && mouseY < 10 + textSize('Créditos')){
p=0
}


// boton comenzar
if(p==0 && mouseX<Px/2+boton[0].width/2 && mouseX>Px/2-boton[0].width/2 && mouseY<Py-boton[0].height/2 && mouseY>Py-boton[0].height*1.5){
  p = 1;
  t = 1;
  console.log ('comenzar',p,'txt:',t)
  } 
  //boton siguiente
  else if(p>0 && p<23 && p!=3 && p!=6 && p!=5 && p!=7 && p!=10 && p!=12 && p!=17 && p!=20 && p!=23 && mouseX < Px && mouseX > Px - boton[1].width/2 && mouseY < Py && mouseY > Py - boton[1].height/2){
        console.log ('siguiente',p,'txt:',t);
        p++;
        t = (t + 1) % texto.length;
        lineastxt();
    }
    //primera decision
    //no lo toma en serio
    else if(p==3 && mouseX<Px/2 && mouseX<=Px && mouseY < Py){
  p=6;
  t=4;
  console.log('zona1',p,'txt:',texto[t],t);
  
  //lo toma en serio
  }else if(p==3 && mouseX>Px/2 && mouseX<=Px && mouseY < Py){
  p=4;
  t=6;
  console.log('zona2',p,'txt',t);
  sonido.play();
  }else if(p==5 && mouseX < Px && mouseX > Px - boton[1].width/2 && mouseY < Py && mouseY > Py - boton[1].height/2){
    console.log ('siguiente',p,'txt',t);
  p=8;
  t=8;
  }
    //primer final
    else if(p==6 && mouseX < Px && mouseX > Px - boton[1].width/2 && mouseY < Py && mouseY > Py - boton[1].height/2){
        console.log ('siguiente',p,'txt',t);
        p=7;
        t=5;
    }
     
     
     //segunda decision
     //va por dentro
    else if(p==10 && mouseX>Px/2 && mouseX<=Px && mouseY < Py){
  p=13;
  t=13;
  console.log('zona1',p,'txt:',texto[t],t);
  sonido.play();
  }
  //va por fuera
  else if(p==10 && mouseX<Px/2 && mouseX<=Px && mouseY < Py){
  p=11;
  t=11;
    console.log('zona2',p,'txt',t);
  }
    //tercera decision
    //se arriesga
    else if(p==17 && mouseX<Px/2 && mouseX<=Px && mouseY < Py){
    p=18;
    t=18;
    sonido.play();
    }
    //no se arriesga
    else if(p==17 && mouseX>Px/2 && mouseX<=Px && mouseY < Py){
    p=21;
    t=21;
    }
    //reiniciar
    else if((p==7 || p==12 || p==20 || p==23) && mouseX<Px/2+boton[0].width/2 && mouseX>Px/2-boton[0].width/2 && mouseY<Py-boton[0].height/2 && mouseY>Py-boton[0].height*1.5){
    p=0;
    t=0
    console.log ('reiniciar',p,'txt',t)
    }

}
