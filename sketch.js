const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg;
var ground1, ground2, ground3;
var sling, polygon;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11, pin12, pin13, pin14, pin15, pin16;
var pin01, pin02, pin03, pin04, pin05, pin06, pin07, pin08, pin09;
var gameState = "start";
var backgroundImg;
var score = 0;

function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(width/2,490,width,20);
  ground2 = new Ground(width/2+50,height/2+150,200,10);
  ground3 = new Ground(width*7/8,height/2+25,180,10);
  polygon = new Polygon(width/7,height/2+50,55,55);
  sling = new Rope(polygon.body,{x:width/7, y:height/2+50});
  pin1 = new Box(width/2+50,height/2+110,25,60); 
  pin2 = new Box(width/2+24,height/2+110,25,60);
  pin3 = new Box(width/2-2,height/2+110,25,60); 
  pin4 = new Box(width/2-28,height/2+110,25,60); 
  pin5 = new Box(width/2+76,height/2+110,25,60); 
  pin6 = new Box(width/2+102,height/2+110,25,60); 
  pin7 = new Box(width/2+128,height/2+110,25,60); 
  pin8 = new Box(width/2+50,height/2+51,25,60); 
  pin9 = new Box(width/2+24,height/2+51,25,60); 
  pin10 = new Box(width/2-2,height/2+51,25,60); 
  pin11 = new Box(width/2+76,height/2+51,25,60); 
  pin12 = new Box(width/2+102,height/2+51,25,60); 
  pin13 = new Box(width/2+50,height/2-10,25,60); 
  pin14 = new Box(width/2+24,height/2-10,25,60); 
  pin15 = new Box(width/2+76,height/2-10,25,60);
  pin16 = new Box(width/2+50,height/2-71,25,60); 
  pin01 = new Box(width*7/8,height/2-11,25,60);
  pin02 = new Box((width*7/8)-26,height/2-11,25,60);
  pin03 = new Box((width*7/8)-52,height/2-11,25,60);
  pin04 = new Box((width*7/8)+26,height/2-11,25,60);
  pin05 = new Box((width*7/8)+52,height/2-11,25,60);
  pin06 = new Box(width*7/8,height/2-72,25,60);
  pin07 = new Box((width*7/8)+26,height/2-72,25,60);
  pin08 = new Box((width*7/8)-26,height/2-72,25,60);
  pin09 = new Box(width*7/8,height/2-133,25,60);
  
  Engine.run(engine)
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  rectMode(CENTER);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  polygon.display();
  sling.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  pin12.display();
  pin13.display();
  pin14.display();
  pin15.display();
  pin16.display();
  pin01.display();
  pin02.display();
  pin03.display();
  pin04.display();
  pin05.display();
  pin06.display();
  pin07.display();
  pin08.display();
  pin09.display();

  pin1.score();
  pin2.score();
  pin3.score();
  pin4.score();
  pin5.score();
  pin6.score();
  pin7.score();
  pin8.score();
  pin9.score();
  pin10.score();
  pin11.score();
  pin12.score();
  pin13.score();
  pin14.score();
  pin15.score();
  pin16.score();
  pin01.score();
  pin02.score();
  pin03.score();
  pin04.score();
  pin05.score();
  pin06.score();
  pin07.score();
  pin08.score();
  pin09.score();



  fill("#71E83C");
  textStyle(BOLD);
  textSize(26);
  text("Drag the hexagonal block and launch it to knock out the pins",30,50);
  text("Press Space to throw again",250,75);

  fill("#F1F604");
  textStyle(BOLD);
  textSize(28);
  text("Score: "+score,40,150);
}


function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode==32 && gameState==="launched"){
    Matter.Body.setPosition(polygon.body,{x:width/7, y:height/2+50});
    sling.attach(polygon.body);
    gameState = "start";
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}