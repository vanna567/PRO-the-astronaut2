var background, backgroundImage;
var astronaut, astronaut_img;
var alien1, alien2, alien3, alienObstaclesGroup, obstacleAlien;
var bottomGround, topGround;
var gameOver, gameOverImg;
var restart, restartImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  backgroundImage = loadImage("./assets/espacio.jpg");

  astronaut_img = loadImage("./assets/astronauta.JPEG");

  alien1 = loadImage("./assets/Alien 1.png");
  alien2 = loadImage("./assets/Alien 2.png");
  alien3 = loadImage("./assets/Alien 3.png");

  restartImg = loadImage("./assets/restart.png");
  gameOverImg = loadImage("./assets/gameOver.png");
} 

function setup() {
  createCanvas(900,500);
  
 background = createSprite(160, 470, 10, 10);
 background.addImage(backgroundImage);
 background.scale = 1.4;

 astronaut = createSprite(100,200,25,40);
 astronaut.addImage(astronaut_img);
 astronaut.scale = 0.1;

 alienObstaclesGroup = new Group();

gameOver = createSprite(230,210);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;

restart = createSprite(230,240);
restart.addImage(restartImg);
restart.scale = 0.5;

bottomGround = createSprite(200,490,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

gameOver.visible = false;
restart.visible = false;
}

function draw() {
  if (gameState === PLAY) {
  if (keyDown("UP_ARROW")) {
    astronaut.velocityY = -6;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.velocityY = 6;
  }

  drawSprites();

 

  if (astronaut.isTouching(alienObstaclesGroup)) {
    gameState = END;
  }
}
  if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
    alienObstaclesGroup.setVelocityXEach(0);
  

  alienObstaclesGroup.setLifetimeEach(-1);

  if (mousePressedOver) {
    restart();
  }
  }

}

function spawnObtaclesAlien() {
  if(World.frameCount % 60 === 0) {
obstacleAlien = createSprites(905,50,35,45);

obstacleAlien.debug=true;
obstacleAlien.scale = 0.1;
obstacleAlien.velocityX = -3;

obstacleAlien.y = Math.round(random(30,200));

var rand = Math.round(random(1,3));

switch(rand) {
  case 1:obstacleAlien.addImage(alien1);
         break;
  case 2:obstacleAlien.addImage(alien2);
         break;
  case 3:obstacleAlien.addImage(alien3);
         break;      
  default:break;               
}
  }
  }

  function reset()
  {
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    alienObstaclesGroup.destroyEach();
    score = 0;
  }
 
  