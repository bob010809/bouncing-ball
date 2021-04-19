const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var groundOptions ={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,200,20,groundOptions);
    World.add(world,ground)

    var object_options ={
        restitution:1.0
    }

   object= Bodies.rectangle(200,100,200,20,object_options);
    World.add(world,object)

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,20,20);

}
