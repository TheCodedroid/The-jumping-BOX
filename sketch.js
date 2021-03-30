var canvas;
var music;
var block1,block2,block3,block4,player,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,580,360,30)
block1.shapeColor="red"
block2=createSprite(295,580,360,30)
block2.shapeColor="green"
block3=createSprite(515,580,360,30)
block3.shapeColor="blue"
block4=createSprite(740,580,360,30)
block4.shapeColor="purple"
player=createSprite(random(20,750),100,40,40)
player.shapeColor="Yellow"
player.velocityX=4
player.velocityY=9
    //create box sprite and give velocity

}

function draw() {
    background("black")
    //create edgeSprite
edges=createEdgeSprites()
player.bounceOff(edges)
if(player.isTouching(block1)&& player.bounceOff(block1)){
    player.shapeColor="red"
    music.play()
}
if(player.isTouching(block2)&& player.bounceOff(block2)){
    player.shapeColor="green"
    
}
if(player.isTouching(block3)&& player.bounceOff(block3)){
    player.shapeColor="blue"
    
}
if(player.isTouching(block4)&& player.bounceOff(block4)){
    player.shapeColor="purple"
    
}
drawSprites()
    //add condition to check if box touching surface and make it box
}
