
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {}

function setup() {
	createCanvas(1550, 750);

	engine  = Engine.create();
	world   = engine.world;

	mango1  = new Mango(610, 100, 80, 80);
	mango2  = new Mango(660, 100, 80, 80);
	mango3  = new Mango(630, 150, 80, 80);
	mango4  = new Mango(500, 100, 80, 80);
	mango5  = new Mango(550, 80,  80, 80);
	mango6  = new Mango(580, 60,  80, 80);
	mango7  = new Mango(630, 60,  80, 80);
	mango8  = new Mango(510, 150, 80, 80);
	mango9  = new Mango(550, 160, 80, 80);
	mango10 = new Mango(660, 160, 80, 80);

	tree     = new Tree     (1150, 400, 800,  800);
	boy      = new Boy      (300,  637, 400,  400);
	ground   = new Ground   (100,  750, 2900, 20);
	stone    = new Stone    (0, 0,  80, 80);
	
	launcher = new Launcher (stone.body, {x:180, y:545});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(142, 142, 142);
  Engine.update(engine);
	
	{	
		textSize(25);
		fill(255);
		text("Press Space to get a second chance", 200, 100);
	}
	

	tree  .display();
	boy   .display();
	ground.display();
	stone .display();
	
	launcher.display();

	mango1 .display();
	mango2 .display();
	mango3 .display();
	mango4 .display();
	mango5 .display();
	mango6 .display();
	mango7 .display();
	mango8 .display();
	mango9 .display();
	mango10.display();
	
	
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);	
  
    drawSprites();
 
}	

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.body.setPosition(stone.body, {x : 200, y : 200});
		launcher.attach(stone.body);
	}
}

function detectCollision(stone, mango) {
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

		var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

		
	if(distance <= mango.width + stone.width) {
		Matter.body.setStatic(mango, false);
	}

}
