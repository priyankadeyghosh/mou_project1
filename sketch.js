var canvas;
var music;
var surface1,surface2,surface3,surface4;
var movingbox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,100,50,50);
surface1.shapeColor="red";
surface2=createSprite(200,100,50,50);
surface2.shapeColor="green";
surface3=createSprite(300,100,50,50);
surface3.shapeColor="blue";
surface4=createSprite(400,100,50,50);
surface4.shapeColor="yellow";

    //create box sprite and give velocity
movingbox=createSprite(20,20,30,30);
movingbox.shapeColor="white";
//movingbox.velocityX=3;
//createSprite(random(20,750));
}

function draw() {
    background(rgb(169,169,169));
 movingbox.x=World.mouseX;
 movingbox.y=World.mouseY;   
    //create edgeSprite
/*movingbox.bounceoff(edges);
movingbox.bounceoff(surface1);
movingbox.bounceoff(surface2);
movingbox.bounceoff(surface3);
movingbox.bounceoff(surface4);*/

    //add condition to check if box touching surface and make it box
/*if(movingbox.isTouching(surface1)||movingbox.isTouching(surface2)||movingbox.isTouching(surface3)||movingbox.isTouching(surface4)){
    movingbox.shapecolor="change";
    movingbox.velocityX=0;
    music.stop();
}*/





drawSprites();
}
