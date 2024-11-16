class Nave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 20;
    this.velocidad = 5;
  }
  moverDerecha() {
    this.x = this.x +5;
  }

  moverIzquierda() {
    this.x = this.x -5;
  }
  moverAbajo() {
    this.y = this.y +5;
  }

  moverArriba() {
    this.y = this.y -5;
  }

  teclaPresionada() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    }
    if (keyCode === 32) {
      this.disparar();
    }
  }
  disparar() {
    balas.push(new Bala(this.x + this.ancho / 2, this.y));
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
