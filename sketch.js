var box1;
var box2;
var box3;

var square1;
var square2;
var square3;

function setup()
 {
    createCanvas(500,500);
   
    square1 = createSprite(400, 100, 50, 50);
    square1.shapeColor = "black";
    square1.velocityX = -4;

    square2 = createSprite(0, 200, 50, 50);
    square2.shapeColor = "black";
    square2.velocityX = 6;

    square3 = createSprite(400, 300, 50, 50);
    square3.shapeColor = "black";
    square3.velocityX = -4;

    box1 = createSprite(150, 100, 60, 60);
    box1.shapeColor = "black";

    box2 = createSprite(350, 200, 60, 60);
    box2.shapeColor = "black";

    box3 = createSprite(150, 300, 60, 60);
    box3.shapeColor = "black";
 }
 function draw() 
 {

  // background(mouseX,mouseY,mouseX/mouseY);
   background("lightgreen");
    square.x = World.mouseX;
    square.y = World.mouseY;

    bounceoff(square1,box1);
    bounceoff(square2,box2);
    bounceoff(square3,box3);
   
    drawSprites();
 }

 function bounceoff(square1,box1)
 {
   if(square1.x - box1.x < square1.width/2 + box1.width/2 && 
      box1.x - square1.x < square1.width/2 + box1.width/2 )
      {
        square1.velocityX = square1.velocityX * (-1);
        box1.shapeColor = "purple";
        square1.shapeColor = "yellow";
      }
 }
 function bounceoff(square2,box2)
 {
   if(square2.x - box2.x < square2.width/2 + box2.width/2 && 
      box2.x - square2.x < square2.width/2 + box2.width/2 )
      {
        square2.velocityX = square2.velocityX * (1);
        box2.shapeColor = "orange";
        square2.shapeColor = "lavender";
      }
}
 function bounceoff(square3,box3)
 {
   if(square3.x - box3.x < square3.width/2 + box3.width/2 && 
      box3.x - square3.x < square3.width/2 + box3.width/2 )
      {
        square3.velocityX = square3.velocityX * (-1);
        box3.shapeColor = "skyblue";
        square3.shapeColor = "pink";
      }
 }