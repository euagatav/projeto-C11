
var navio
var mar
var navioImage
var marImage

function preload(){

marImage = loadImage ("sea.png");
navioImage = loadAnimation ("navio1.png", "navio2.png" , "navio3.png" ,"navio4.png");
}

function setup(){
  
  createCanvas(400,400);

  mar = createSprite(100,160);
  mar.addImage(marImage);

  navio= createSprite(200,200);
  navio.addAnimation("navioImage",navioImage);
  navio.scale= 0.3

}

function draw() {

  background("blue");
  drawSprites();

 
}
