let angle = 32;
let centroX, centroY;
let spdRot = 0.05;

function circulos() { // círculos que giran hacia la derecha
  push();
  centroX = width / 2 + 197;
  centroY = height / 2;
  noStroke();
  fill(160, 208, 226);
  ellipse(centroX, centroY, 266, 208);
  fill(colorActual);
  let x = width;
  let tam = 300;
  let num = 100;
  translate(centroX, centroY);
  
  for (let j = 0; j < 360; j += 22.5) {
    rotate(radians(j));
    push();
    for (let i = 0; i < num; i++) {
      scale(0.7);
      rotate(radians(angle));
      ellipse(x, 0, tam, tam);
    }
    pop();
  }
  pop();
  angle += spdRot;
}

function circulos1() { // círculos que giran hacia la izquierda
  push();
  centroX = width / 2 + 197;
  centroY = height / 2;
  noStroke();
  fill(160, 208, 226);
  ellipse(centroX, centroY, 266, 208);
  fill(colorActual);
  let x = width;
  let tam = 300;
  let num = 100;
  translate(centroX, centroY);
  
  for (let j = 0; j < 360; j += 22.5) {
    rotate(radians(j));
    push();
    for (let i = 0; i < num; i++) {
      scale(0.7);
      rotate(-radians(angle));
      ellipse(x, 0, tam, tam);
    }
    pop();
  }
  pop();
  angle += spdRot;
}
