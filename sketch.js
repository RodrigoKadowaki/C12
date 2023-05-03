var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200, 200, width, height);
  path.addImage(pathImg);
  path.velocityY = 10;
  path.scale=1.2;

boy = createSprite(200, 300, width, height);
//crie um sprite de menino
boy.addAnimation("walking", boyImg);
//adicione uma animação de corrida para ele
boy.scale=1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visibility=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visibility=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
