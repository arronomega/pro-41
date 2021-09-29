const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var th1,th2,th3,th4;
var engine,world;
var drops=[];
var rand ;
var maxDrops  = 100;
var thunder;
var tcf=0;
function preload(){
    th1 = loadImage("thunderbolt/one.png");
    th2 = loadImage("thunderbolt/two.png");
    th3 = loadImage("thunderbolt/three.png");
    th4 = loadImage("thunderbolt/four.png");
}
//?
function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,500);
    if(frameCount%150 === 0){
        for(var i=0;i<=maxDrops;i++){
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
    }
}

function draw(){
    background("black");
    Engine.update(engine); 
    umbrella.display();
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        tcf = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage(th1)
             break;
            case 2:thunder.addImage(th2) 
            break;
            case 3:thunder.addImage(th3) 
            break;
            case 4:thunder.addImage(th4) 
            break;
            default:break;
        } 
            
    }
    if(tcf + 10 === frameCount && thunder){
        thunder.destroy();
    }
    for(var i=0;i<=maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

