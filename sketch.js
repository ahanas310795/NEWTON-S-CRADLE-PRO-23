const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 100, 300, 30);
	World.add(world, roof);

	bob1 = new Bob(250, 300);
	bob2 = new Bob(300, 300);
	bob3 = new Bob(350, 300);
	bob4 = new Bob(400, 300);
	bob5 = new Bob(450, 300);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	World.add(world, rope1);

	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	World.add(world, rope2);

	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	World.add(world, rope3);

	rope4 = new Rope(bob4.body, roof.body, +50, 0);
	World.add(world, rope4);

	rope5 = new Rope(bob5.body, roof.body, +100, 0);
	World.add(world, rope5);

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
	background("#99004d");
	drawSprites();
	
	Engine.update(engine);

	roof.display();

	bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -730, y: 0});
	}
}
  