
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	dustbinObj=new Dustbin(900,350);
	groundObject=new Ground(width/2,370,width,20);
	paperObject=new Paper(100,150,40);
	

	
}


function draw() {
  rectMode(CENTER);
  background(255);
 Engine.update(engine);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-85});
    
  	}
}




