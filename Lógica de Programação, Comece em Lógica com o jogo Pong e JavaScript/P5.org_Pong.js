// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;
let esquerdaBolinha = xBolinha - raio;
let superiorBolinha = yBolinha - raio;
let inferiorBolinha = yBolinha + raio;

// velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;
// Comprimento da raquete
let wRaquete = 10;
// Altura da raquete
let hRaquete = 90;

// variaveis da raquete
let xRaquete = 2;
let yRaquete = 150;
let direitaRaquete = xRaquete + wRaquete;
let superiorRaquete = yRaquete;
let inferiorRaquete = yRaquete + hRaquete;

// Raquete do Oponente
let xRaqueteOponente = 588;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// Para verificar a colisão, com a bliblioteca importada
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  moverBolinha();
  verificaBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  movRaqueteOponente();
  // verifColisaoRaquete();
  // verifColisaoRaqueteT();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function moverBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
  velocidadeXBolinha *= -1;  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeYBolinha *= -1;  }
}
function mostraRaquete(x, y){
  rect(x, y, wRaquete, hRaquete);
  }
function moveRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;  }
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  yRaquete = constrain(yRaquete, 1, 310);
}
function movRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - wRaquete /2 -30;
  yRaqueteOponente += velocidadeYOponente;
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  yRaqueteOponente = constrain(yRaqueteOponente, 1, 310);
}
function verificaColisaoRaquete(x, y){
 colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function verifColisaoRaquete(){
  if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;  }
}
// Criado apenas para teste, mas não funcionou
function verifColisaoRaqueteT(){
  if (esquerdaBolinha < direitaRaquete && superiorBolinha < inferiorRaquete && inferiorBolinha > superiorRaquete) {
    velocidadeXBolinha *= -1;
  }
}
