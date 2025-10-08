function pantalla() {
  if (estado == 'inicio') {
    image(pantallas[p], 0, 0, fondoX, fondoY);
    botones();
  } else if (estado == 'creditos') {
    image(pantallas[0], 0, 0, fondoX, fondoY);
    push();
    textFont(fuente);
    textSize(32);
    for (let i = 0; i < boton.length; i++) {
      let x = boton[i][0];
      let y = boton[i][1];
      let w = boton[i][2];
      let h = boton[i][3];
      let texto = boton[i][4];

      if (i==0) {
        text('Tatiana\nMontenegro', x-50, y);
      }
      if (i==1) {
        text('Tobias\nSokol', x, y);
      }
      if (i==2) {
        if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
          fill(228, 0, 2);
          noStroke();
        } else {
          fill(255);
          stroke(0);
          strokeWeight(1);
        }
        rect(x, 10, w, h, 16);
        // texto
        fill(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h ? 255 : 0);
        textFont(fuente);
        textSize(32);
        textAlign(LEFT, TOP);
        text(texto, x + 10, y);
      }
    }
    pop();
  } else if (estado == 'juego') {
    image(pantallas[p], 0, 0, fondoX, fondoY);

    // Si pasaron más de 3 segundos
    if (millis() - tiempoInicio > duracionPantalla) {
      p++;                // paso a la siguiente pantalla
      tiempoInicio = millis(); // reinicio el contador
    }
  }
}

//funcion para verificar las pantallas, borrar cuando se termine el codigo
function keyPressed() {
  if (key=='d'&& p<=18) {
    estado= 'inicio';
  }
}
