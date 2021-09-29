class Umbrella {
    constructor(x, y) {

        var options ={
          
            static:true
        }
    this.r=50;
    this.image = loadImage("Walking Frame/walking_1.png");
    this.umbrella = Bodies.circle(x, y, this.r,options);       
    this.color=color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.umbrella);
    }
    display() {

        var pos = this.umbrella.position; 
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
      
    }

};