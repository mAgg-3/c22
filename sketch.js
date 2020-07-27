const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball;
function setup() {
  var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options ={
  isStatic: true
}
ground=Bodies.rectangle(200,350,200,20,ground_options);
World.add(world,ground);
console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);
var ball_options ={
  restitution: 1.5
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}