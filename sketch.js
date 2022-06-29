
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftSide,rightSide,chao;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 690);


	engine = Engine.create();
	world = engine.world;
	chao = new Ground(width/2,681,width,20);
    leftSide = new Ground(700,650,20,120);
	rightSide = new Ground(560,650,20,120);
	
	//Create the Bodies Here.
    var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	ellipseMode(RADIUS);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  leftSide.display();
  rightSide.display();
  chao.display();
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}


