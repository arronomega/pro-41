class Drop {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction:0.001
        }
        this.r=5;
      
        this.rain = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.rain);

    }
    updateY (){
        if(this.rain.position.y > height){
            Matter.Body.setPostion(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
   showDrop(){
       ellipseMode(RADIUS);
        ellipse(this.rain.position.x, this.rain.position.y, this.r,this.r);
        


   }
        
 

};