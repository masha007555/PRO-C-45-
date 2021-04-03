var back,backImg;
var BADAImg;
var BANAImg;
var bullet, bullet1_Img,bullet2_Img;
var homeBG_Img;
var play,playImg;
var shop,shopImg,shopBG_Img;
var sun,sunImg
var stage_B1,stage_B2;

var BM,buy,click,shoot;
var gameState = "home";

var vol = 1

var helicopterImg,helicopter;

var bar;
var score = 0;

function preload() {
  backImg = loadImage("images/back.png");
  BADSImg = loadImage("images/BADS.jpeg");
  BANSImg = loadImage("images/BANS.jpeg");
  bullet1_Img = loadImage("images/bullet_1.png");
  bullet2_Img = loadImage("images/bullet_2.png");
  homeBG_Img = loadImage("images/homeBG.jpeg");
  playImg = loadImage("images/play.png");
  shopImg = loadImage("images/shop.png");
  shopBG_Img = loadImage("images/shopBG.jpeg");
  sunImg = loadImage("images/sun.png");

  helicopterImg = loadAnimation("helicopter 1.png","helicopter 2.png","helicopter 3.png","helicopter 4.png");

  BM = loadSound("audio/BM.mp4");
  buy = loadSound("audio/buy.mp4");
  click = loadSound("audio/click.mpeg");
  shoot = loadSound("audio/shoot.mpeg");
}

function setup() {
  createCanvas(1500,700);

  // BM.loop();
  // BM.setVolume(0.3);

  bar = createSprite(width/3,140, 500,30);

  play = createSprite(725,300,10,10);
  play.addImage(playImg);
  play.scale = 0.25;

  shop = createSprite(100,75,10,10);
  shop.addImage(shopImg);
  shop.scale = 0.06;
  
  helicopter = createSprite(200,200,10,10);
  helicopter.addAnimation("flying",helicopterImg);

  stage_B1 = createSprite(width/2,height/2,1300,600);
  stage_B1.shapeColor = "orange";

  stage_B2 = createSprite(width/2,380,1090,500);
  stage_B2.shapeColor = "lightblue";

  back = createSprite(160,110,10,10);
  back.addImage(backImg);
  back.scale = 0.2;
}

function draw() {
  background(homeBG_Img);
  drawSprites();

  // score +=10;

  // push();

  // bar1 = createSprite(width/3,140, score/500,30);
  // bar1.shapeColour = "red";

  // pop();

  if (keyDown("UP_ARROW")){
    helicopter.velocityY = -10
  }

  if (helicopter.velocityY < 200){
    helicopter.velocityY +=0.8;
  }
  console.log(helicopter.velocityY);

  if (gameState ==="home"){
    home();
  }

  if (gameState === "stages"){
    stages();
  }

}

function home() {
  drawSprites();

  shop.visible = true;
  play.visible = true;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;

  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",550,100);

  if (mousePressedOver(play)){
    click.play();
    gameState = "stages";
  }
}

function stages(){
  background(shopBG_Img);
  drawSprites();

// fadeOutVolume()
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STAGES",600,120);

  shop.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;

  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

function fadeOutVolume(){
  vol -=0.5
  BM.setVolume(vol);
}
