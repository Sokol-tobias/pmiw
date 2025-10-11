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

function obtenerTextoPorPantalla(indice) {
  
  const mapaDeLineas = {
    
    1: 1,   // pantalla1 --> Línea 1 (txt[0])
    2: 2,   // pantalla2 --> Línea 2 (txt[1])
    3: 3,   // pantalla3 --> Línea 3 (txt[2])
    4: 4,   // pantalla4 --> Línea 4 (txt[3])
    5: 5,   // pantalla5 --> Línea 5 (txt[4])
    6: 7,   // pantalla6 --> Línea 7 (txt[6])
    7: 8,   // pantalla7 --> Línea 8 (txt[7])
    8: 9,   // pantalla8 --> Línea 9 (txt[8])
    9: 10,  // pantalla9 --> Línea 10 (txt[9])
    10: 11, // pantalla10 --> Línea 11 (txt[10])
    12: 6,  // pantalla12 --> Línea 6 (txt[5]) 
    13: 7,  // pantalla13 --> Línea 7 (txt[6])
    15: 13, // pantalla15 --> Línea 13 (txt[12])
    16: 14, // pantalla16 --> Línea 14 (txt[13])
    17: 15, // pantalla17 --> Línea 15 (txt[14])
    18: 16  // pantalla18 --> Línea 16 (txt[15])
  };
  
  let lineaDeseada = mapaDeLineas[indice];
 
  if (lineaDeseada !== undefined) {
    let indiceDeTexto = lineaDeseada - 1; 
    
    if (indiceDeTexto >= 0 && indiceDeTexto < txt.length) {
       return txt[indiceDeTexto]; 
    }
  }
  
  return ""; 
}

function mostrarTextoJuego() {
  if (estado === 'juego' || estado === 'decision') {
    
    let textoAMostrar = obtenerTextoPorPantalla(p); 
    
    if (textoAMostrar.length > 0) {
      push();
      
      textFont(fuente); 
      textSize(18); 
      fill(255);  
      noStroke();
      textAlign(LEFT, TOP);
    
    // la posicion de la caja de texto
      let xCaja = 15; 
      let yCaja = 15; 
      let wCaja = width * 0.75; 
      let hCaja = 140; 
      
      // Fondo transparentito je
      fill(0, 0, 0, 180); 
      rect(xCaja, yCaja, wCaja, hCaja, 10); 
      
      // Texto
      fill(255); 
   
      text(textoAMostrar, xCaja + 10, yCaja + 10, wCaja - 20, hCaja - 20);
      
      pop();
    }
  }
    }
