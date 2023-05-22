

var trex ,trex_running, trex_img, trex_collide
var ground, invisibleGround, groundImage
function preload(){
  trex_img=loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20, 170, 40, 50);
 trex.addAnimation("trex1.png", "trex3.png", "trex4.png")
 trex.scale="0.4"
 ground=createSprite(200, 180, 400, 20);
 ground.addImage("ground", groundImage)
 invisibleGround=createSprite(200, 190, 400, 20);
 invisibleGround.visible=false
 ground.velocityX=-2
}

function draw(){
  background("White")
  if (keyDown("space")){
    trex.velocityY=-10;
    
  }
  trex.velocityY=trex.velocityY+1
  if (ground.x<0){
    ground.x=ground.width/2

  }
  trex.collide(invisibleGround)
  drawSprites();

}
