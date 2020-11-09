class Paper {
    constructor(x,y,radius,angle){
        var options={
'isStatic':true,
'restitution':0,
'friction':1.0,
'density':1.2
        }
 this.body= Bodies.circle(x,y,radius,options)
 this.radius=70
 this.image= loadImage("paper.png")

        World.add(world, this.body);
    }
    display(){
   var angle = this.body.angle;
   var pos=this.body.position
   
   push()
   translate(pos.x, pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image, 0,0, this.radius,this.radius);
   pop()
    }
}