const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball= new Rubber(200,200,50);
    box= new Iron(200,200);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    ball.display();
    hammer.display();
    box.display();
    
 
}