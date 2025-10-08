boton = [
  [505, 383, 96, 44, 'iniciar'],
  [30, 383, 130, 44, 'creditos'],
  [30, 10, 90, 44, 'inicio']
  ]

  function botones() {
  //variables dentro de la funcion botones
  let corner = 16;
  push();
  textFont(fuente);
  textSize(32);
  textAlign(LEFT, TOP);
  if (estado == 'inicio') {
    for (let i = 0; i < 2; i++) {
      let x = boton[i][0];
      let y = boton[i][1];
      let w = boton[i][2];
      let h = boton[i][3];
      let texto = boton[i][4];

      //hover
      if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        fill(228, 0, 2);
        noStroke();
      } else {
        fill(255);
        stroke(0);
        strokeWeight(1);
      }

      //boton
      rect(x, y, w, h, corner);

      // texto
      fill(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h ? 255 : 0);
      textFont(fuente);
      textSize(32);
      textAlign(LEFT, TOP);
      text(texto, x + 5, y);
    }
  }
  pop();
}

function mouseReleased() {
    for (let i = 0; i < boton.length; i++) {
      let x = boton[i][0];
      let y = boton[i][1];
      let w = boton[i][2];
      let h = boton[i][3];

      if ( mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        if (i == 0 && estado == 'inicio') { // Iniciar
          estado = 'juego';
          p = 1;
          tiempoInicio = millis();
          console.log('estas apretando en iniciar');
        } else if (i == 1 && estado == 'inicio') { // Créditos
          estado = 'creditos';
          p = 0;
          console.log('estas apretando en creditos');
        } else if (i == 2 && estado == 'creditos') { // Créditos
          estado = 'inicio';
           p = 0;
          console.log('estas apretando en inicio');
        }
      }
      /*      if (i == 2 && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
       estado = 'decision';
       }*/
    }
  }
