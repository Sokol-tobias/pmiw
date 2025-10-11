function pantalla() {

  if (estado == 'inicio') {                            //inicio pantalla de inicio con los creditos
    image(pantallas[p], 0, 0, fondoX, fondoY);
    botones();
  } else if (estado == 'creditos') {
    image(pantallas[0], 0, 0, fondoX, fondoY);
    push();
    textFont(fuente);
    textSize(32);
    botones();
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
    }                            //final pantalla de inicio con los creditos
    pop();
  } else if (estado == 'juego') {
    image(pantallas[p], 0, 0, fondoX, fondoY);

    // Si pasaron más de 4 segundos
    if (millis() - tiempoInicio > duracionPantalla) {
      if (puntosDeDecision.includes(p + 1)) {
        p++;
        estado = 'decision';
      } else {
        p++;
      }
      tiempoInicio = millis(); // Reinicia el contador de tiempo
    }
  } else if (estado == 'decision') {
    image(pantallas[p], 0, 0, fondoX, fondoY);
    botones();
  }

  if (estado == 'reiniciar') {
    image(pantallas[0], 0, 0, fondoX, fondoY);
    botones();
  }
  if (p == 10 && estado =='decision') {
    if (millis() - tiempoInicio > duracionDecision) {
      p++;
      estado = 'juego';
      tiempoInicio = millis();
    }
  }
  if (p == 3 && estado =='juego') {                          //finales
    if (millis() - tiempoInicio > duracionDecision) {
      estado = 'reiniciar';
      tiempoInicio = millis();
    }
  }
  if (p == 17 && estado =='juego') {
    if (millis() - tiempoInicio > duracionDecision) {
      estado = 'reiniciar';
      tiempoInicio = millis();
    }
  }
  if (p == 17 && estado =='juego') {
    if (millis() - tiempoInicio > duracionDecision) {
      estado = 'reiniciar';
      tiempoInicio = millis();
    }
  }
  if (p == 11 && estado == 'juego') {
    if (millis() - tiempoInicio > duracionPantalla1) {
      cambiarEstado('finalB');
    }
  }
  if (p == 13 && estado == 'juego') {
    if (millis() - tiempoInicio > duracionPantalla1) {
      cambiarEstado('finalBR');
    }
  }
}

//funcion para verificar las pantallas, borrar cuando se termine el codigo
function keyPressed() {
  if (key=='d'&& p<=18) {
    estado= 'inicio';
  }
  if (key=='a'&& p<=18) {
    p++;
  }
}
