var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var flecha,arrow;

function preload() {
   // flecha = loadAnimation("trex1.png", "trex3.png", "trex4.png");
     flecha= loadImage("flechariiba.png");
    flechaAbajo = loadImage("flechaabajo.png");
    flechaIzq= loadImage("flechaizquierda.png")
    flechader=loadImage("flechaderecha.png")
}

function setup() {
    createCanvas(800, 600);
    //crear sprite 
   arrow = createSprite(350,120,20,50);
   arrow.addImage("flecha",flecha)
    // trex.addAnimation("running", trex_running);
   
  downArrow = createSprite(350,300,20,50);
  downArrow.addImage("flechaa",flechaAbajo)
  

  leftArrow = createSprite(220,200,20,50);
  leftArrow.addImage("flechai",flechaIzq)
 

  rightArrow = createSprite(477,205,20,50);
  rightArrow.addImage("flechad",flechader)

}

function draw() {
    background(220);
//hacer que el trex salte al presionar la barra espaciadora
if(keyDown("up_arrow")){
    arrow.velocityY=-2
    arrow.lifetime=-40;
}
   
   if(keyDown("down_arrow")){
    
    downArrow.velocityY=2
    downArrow.lifetime=50;
   
   }
   
   if(keyDown("left_arrow")){
    leftArrow.velocityX=-2
    leftArrow.lifetime=50;
   }

   if(keyDown("right_arrow")){
    rightArrow.velocityX=2
    rightArrow.lifetime=50;      
   }
    arrow.display();
    downArrow.display()
    drawSprites();
}
