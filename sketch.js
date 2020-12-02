var canvas, backgroundImage;
var player1,playerStep1,playerNormal1,playerTouch1;
var player2,playerStep2,playerNormal2,playerTouch2;
var player3,playerStep3,playerNormal3,playerTouch3;
var player4,playerStep4,playerNormal4,playerTouch4;
var player5,playerStep5,playerNormal5,playerTouch5;
var Tree
var Tree2
var invisibleLeft , invisibleRight,invisibleBottom,invisibleTop1
var invisibleCenter
var restart, edges;

var gameState=1;



function preload(){
backgroundImage=loadImage("sprites/GROUND.jpg")
    player1 = loadAnimation("sprites/player1-1.png","sprites/player1-2.png",
    "sprites/player1-3.png","sprites/player1-4.png");

    player2 = loadAnimation("sprites/player2-1.png","sprites/player2-2.png",
    "sprites/player2-3.png","sprites/player2-4.png");

    player3 = loadAnimation("sprites/player3-1.png","sprites/player3-2.png",
    "sprites/player3-3.png","sprites/player3-4.png");

    player4 = loadAnimation("sprites/player4-1.png","sprites/player4-2.png",
    "sprites/player4-3.png","sprites/player4-4.png");

    player5 = loadAnimation("sprites/player5-1.png","sprites/player5-2.png",
    "sprites/player5-3.png","sprites/player5-4.png");

   

     Tree=loadAnimation("sprites/TREE.png")
     Tree2=loadAnimation("sprites/TREE1.png")

     restartImg=loadImage("sprites/Restart.png");

}

function setup(){
canvas = createCanvas(displayWidth,displayHeight);




TreeA=createSprite(displayWidth/7,displayHeight/3)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6


TreeB=createSprite(displayWidth/1.09,displayHeight/3)
TreeB.addAnimation("running",Tree)
TreeB.scale=0.6


playerA=createSprite(displayWidth/2,displayHeight/2)
playerA.addAnimation("running",player1)
playerA.scale=0.2
playerA.velocityX=5
playerA.velocityY=-6

playerB=createSprite(displayWidth-100,displayHeight/2)
playerB.addAnimation("running",player2)
playerB.scale=0.2
playerB.velocityX=-6
playerB.velocityY=-5

playerC=createSprite(displayWidth-200,displayHeight/2)
playerC.addAnimation("running",player3)
playerC.scale=0.2
playerC.velocityX=7
playerC.velocityY=5

playerD=createSprite(displayWidth-400,displayHeight/2)
playerD.addAnimation("running",player4)
playerD.scale=0.2
playerD.velocityX=-7
playerD.velocityY=-5

playerE=createSprite(displayWidth-900,displayHeight/2)
playerE.addAnimation("running",player5)
playerE.scale=0.2




TreeA=createSprite(displayWidth/7,displayHeight/3)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6


TreeB=createSprite(displayWidth/1.09,displayHeight/3)
TreeB.addAnimation("running",Tree)
TreeB.scale=0.6



invisibleTop=createSprite(width/2,height/2-50,width,5)
//invisibleTop.visible=false;


restart = createSprite(width/2,height/2);
restart.addImage(restartImg);
restart.scale = 0.3;
restart.visible=false;
restart.scale=0.3

edges=createEdgeSprites();




// player1 = new Player(0,0,0,0);
// player2 = new Player(0,0,0,0);
// player3 = new Player(0,0,0,0);
// player4 = new Player(0,0,0,0);
// player5 = new Player(0,0,0,0);
// tree    = new Tree(0,0,0,0)
}



function draw(){
background(backgroundImage);

playerA.bounceOff(edges);
playerB.bounceOff(edges);
playerC.bounceOff(edges);
playerD.bounceOff(edges);
playerE.bounceOff(edges);


playerA.bounceOff(invisibleTop);
playerB.bounceOff(invisibleTop);
playerC.bounceOff(invisibleTop);
playerD.bounceOff(invisibleTop);
playerE.bounceOff(invisibleTop);


playerA.bounce(playerB);
playerA.bounce(playerC);
playerA.bounce(playerD);
//playerA.bounce(playerE);


playerB.bounce(playerC);
playerB.bounce(playerD);
//playerB.bounce(playerE);

playerC.bounce(playerD);
//playerC.bounce(playerE);

//playerD.bounce(playerE);


if(keyDown("left_arrow")){
    playerE.x-=7;
}
if(keyDown("right_arrow")){
    playerE.x+=7;
}

if(keyDown("up_arrow")){
    playerE.y-=7;
}

if(keyDown("down_arrow")){
    playerE.y+=7;
}
if(playerA.isTouching(playerE)){
  gameState=0;

  

}


if(playerB.isTouching(playerE)){
  gameState=0;
  
 
}

if(playerC.isTouching(playerE)){
  gameState=0;


}



if(playerD.isTouching(playerE)){
  gameState=0;
  

}



if (gameState==0){

restart.visible=true;
playerA.setVelocity(0,0);
playerB.setVelocity(0,0);
playerC.setVelocity(0,0);
playerD.setVelocity(0,0);
playerE.setVelocity(0,0);

if(mousePressedOver(restart)){
    playerA.velocityX=5
    playerA.velocityY=-6

    playerB.velocityX=-6
    playerB.velocityY=-5

    playerC.velocityX=7
    playerC.velocityY=5

    playerD.velocityX=-7
    playerD.velocityY=-5 

    gameState=1;

    restart.visible=false;
}
}


//if(keyDown("space")&&playerE.y>=159) {
//  playerE.velocityY = -10;
//}
// if(playerA.x>1100){
//  // playerA.velocityX=playerA.velocityX*-1
//  playerA.velocityY=4
//  playerA.velocityX=-1
// }

// if(playerA.y>600){
//   playerA.velocityX=-4
//   playerA.velocityY=2
// }

// if(playerA.x<40){
//   playerA.velocityX=1
//   playerA.velocityY=-4
// }
// if(playerA.y<370&&playerA.x<300){
//   playerA.velocityX=4
//   playerA.velocityY=1
// }



 
 











 // if(playerB.x<10||playerB.x>1230||playerB.y<370){
//   playerB.velocityX=playerB.velocityX*-1
// }
// if(playerC.x<10||playerC.x>1230||playerC.y<370){
//   playerC.velocityX=playerC.velocityX*-1
// }
// if(playerD.x<10||playerD.x>1230||playerD.y<370){
//   playerD.velocityX=playerD.velocityX*-1
// }


//playerA.bounceOff(playerB,explosion);
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);


}

function explosion(player)
{
  player.velocityY=random(7,-7);
  player.velocityX=random(7,-7);
}





