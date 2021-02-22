const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , pig1,ground;
var box2,box3,box4,box5,log1,log2,log3,log4,log5,pig2,pig3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,400,20);
    pig1 = new Viking(810,350,50,50);
    pig2 = new Viking(810,220,50,50);
    pig3 = new Viking(200,200,50,50);
    log1 = new Log(810,260,300,PI*2);
    log2= new Log(100,300,300,PI*2);
    log3 = new Log(810,300,300,PI*2);
    log4 = new Log(760,120,150,PI*7);
    log5 = new Log(870,120,150,-PI*2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
}