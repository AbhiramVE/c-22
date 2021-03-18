const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var canvas, engine, world, ball, ground;

function setup(){
canvas = createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var still = {
  isStatic : true
}

ground = Bodies.rectangle(200,350,400,10,still);
World.add(world,ground);

var bouncing = {
  restitution: 0.9
}

ball = Bodies.circle(200,50,20, bouncing);
World.add(world,ball);
}

function draw(){
background(0);
Engine.update(engine);

rectMode(CENTER);
fill ("Red");
rect(ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS);
fill ("Green");
ellipse(ball.position.x, ball.position.y,20,20);

}