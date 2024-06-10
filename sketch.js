let circleX, circleY; // Posição do círculo
let circleColor; // Cor do círculo

function setup() {
  createCanvas(400, 400); // Define o tamanho da tela
  circleX = width / 2; // Posição inicial do círculo no centro
  circleY = height / 2;
  circleColor = color(255, 0, 0); // Cor inicial: vermelho
}

function draw() {
  background(220); // Define o fundo cinza claro

  fill(circleColor); // Define a cor de preenchimento
  ellipse(circleX, circleY, 50, 50); // Desenha o círculo na posição atual

  // Verifica se o mouse está sobre o círculo
  if (dist(mouseX, mouseY, circleX, circleY) < 25) {
    cursor(HAND); // Muda o cursor para uma mãozinha
  } else {
    cursor(ARROW); // Retorna o cursor ao padrão
  }
}

function mousePressed() {
  // Verifica se o mouse está sobre o círculo
  if (dist(mouseX, mouseY, circleX, circleY) < 25) {
    // Muda a cor do círculo ao ser clicado
    circleColor = color(random(255), random(255), random(255));
  }
}

function mouseDragged() {
  // Move o círculo com o mouse enquanto o botão estiver pressionado
  circleX = mouseX;
  circleY = mouseY;
}
