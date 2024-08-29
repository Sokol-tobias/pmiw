let colorInicial = [167, 178, 48];
let colorAleatorio;
let colorActual;
let spdRotate = 0.05;
let valoresAleatorios;

function setup() {
  createCanvas(800, 400);
  colorActual = color(colorInicial[0], colorInicial[1], colorInicial[2]);
  valoresAleatorios = obtenerValoresAleatorios();
  console.log("Valores aleatorios generados: " + valoresAleatorios[0] + ", " + valoresAleatorios[1] + ", " + valoresAleatorios[2]);
}

function obtenerValoresAleatorios() {
  let valores = [];
  for (let i = 0; i < 3; i++) {
    valores[i] = int(random(256));
  }
  return valores;
}

function keyPressed() {
  // Botón de color aleatorio
  if (key === 'r' || key === 'R') {
    valoresAleatorios = obtenerValoresAleatorios();
    colorActual = color(valoresAleatorios[0], valoresAleatorios[1], valoresAleatorios[2]);
    console.log("Color actualizado: (" + valoresAleatorios[0] + ", " + valoresAleatorios[1] + ", " + valoresAleatorios[2] + ")");
  }

  // Botón para aumentar y disminuir la velocidad de giro
  if (key === 'a') { // disminuye
    spdRotate -= 0.05;
    console.log(spdRotate);
  }
  if (key === 'd') { // aumenta
    spdRotate += 0.05;
    console.log(spdRotate);
  }

  // Botón para reiniciar los valores
  if (key === ' ') {
    rotacion = false;
    colorActual = color(colorInicial[0], colorInicial[1], colorInicial[2]);
    spdRotate = 0.05;
  }
}
