class paper{
constructor(x, y,r) {
var options = {
'restitution':0.8,
'friction':1.0,
'density':1.0,
isStatic:false
}
this.x=x;
this.y=y;
this.r=r       
this.body = Bodies.circle(this.x, this.y, this.r/2,  options);
World.add(world, this.body);
}
display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("blue");
ellipse(0, 0, this.r, this.r);
pop();
}
}