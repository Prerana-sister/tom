var catimg ,mouseimg
function preload(){
catimg=loadAnimation("cat1.png");
catimg2=loadAnimation("cat2.png","cat3.png");
catimg4=loadAnimation("cat4.png");
mouseimg=loadAnimation("mouse1.png");
mouseimg2=loadAnimation("mouse2.png","mouse3.png");
mouseimg4=loadAnimation("mouse4.png");
gardenimg=loadImage("garden.png");




}


function setup(){
createCanvas(1000,800)

cat=createSprite(870,600);
cat.addAnimation("catSleeping",catimg)
cat.scale = 0.2;

mouse = createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseimg);
mouse.scale=0.15





}



function draw(){
background(gardenimg);


if(cat.x-mouse.x<(cat.width-mouse.width)/2){

cat.velocityX=0;
cat.addAnimation("catLastimage",catimg4);
cat.x=300;
cat.scale=0.2;
cat.changeAnimation("catLastImage")

mouse.addAnimation("mouseLastimage",mouseimg4);
mouse.scale=0.2;
mouse.changeAnimation("mouseLastImage")
}




drawSprites();

}


function keyPressed(){
  if (keyCode===LEFT_ARROW){
    cat.velocityX=-4
   cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

  
}
