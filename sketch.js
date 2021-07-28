function preload(){

seaImg=loadImage("sea.png");
shipImg1=loadImage  ("ship-1.png");
createCanvas(400,400);
var sea=createSprite(200,200,400,400);
sea.addImage(seaImg);
sea.velocityX=-3
if (sea.x<0){
  sea.x=sea.width/2;
  shipImg2=loadImage("ship-2.png");
  shipImg3=loadImage("ship-3.png");
  shipImg4=loadImage("ship-4.png");
}
var ship= createSprite(200,260,100,100);
  ship.addImage(shipImg1);
ship.scale=0.3;

}

function setup(){

}

function draw() {
  background("blue");
  drawSprites();
}
