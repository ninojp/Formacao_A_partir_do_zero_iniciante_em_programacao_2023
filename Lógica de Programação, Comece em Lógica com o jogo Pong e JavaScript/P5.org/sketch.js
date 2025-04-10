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
let wRaquete = 5;
// Altura da raquete
let hRaquete = 90;

//variaveis da raquete
let xRaquete = 3;
let yRaquete = 150;
let direitaRaquete = xRaquete + wRaquete;
let superiorRaquete = yRaquete;
let inferiorRaquete = yRaquete + hRaquete;

//Raquete do Oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Para verificar a colisão, com a bliblioteca importada
let colidiu = false;

//Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//Adicionar a possibiliddade de erro no pc
let chanceDeErrar = 0;

//Carregar os Sons
let raquetada;
let ponto;
let trilha;
//função para carregar os sons, nas variaveis
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
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
  // movRaquetePlayer2();
  // verifColisaoRaquete();
  // verifColisaoRaqueteT();
  bolinhaNaoFicaPresa();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}
function mostraBolinha(){
  fill(239);
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
  fill(100);
  rect(x, y, wRaquete, hRaquete);
  }
function moveRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  yRaquete = constrain(yRaquete, 1, 310);
}
function movRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - wRaquete /2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
  // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
  yRaqueteOponente = constrain(yRaqueteOponente, 1, 310);
}
//Função para adicionar a chance de erro ao player automático
function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
//Adicionando o modo multi PLayer
function movRaquetePlayer2(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
  yRaqueteOponente = constrain(yRaqueteOponente, 1, 310);
}
function verificaColisaoRaquete(x, y){
 colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
//Copiado... Função para corrir o erro da bolinha presa naraquete
//depois de varios testes.. NÃO RESOLVEU O PROBLEMA, acho eu
function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 30
    }
}

function incluiPlacar(){
  stroke(254);
  textAlign(CENTER);
  textSize(18);
  fill(color(218,165,32));
  rect(150, 10, 40, 20);
  fill(4);
  text(meusPontos, 170, 26);
  fill(color(218,165,32));
  rect(450, 10, 40, 20);
  fill(4);
  text(pontosOponente, 470, 26);
}
function marcaPonto(){
  if(xBolinha > 595){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 5){
    pontosOponente += 1;
    ponto.play();
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
