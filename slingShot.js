class Slingshot{
constructor(bodyA,pointB){
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10

    }

    this.slingShot=Constraint.create(options)
   World.add(world,this.slingShot)


}
display(){
    if(this.slingShot.bodyA){
    
    
    var pointA=this.slingShot.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(20);
    line(pointA.x,pointA.y,200,100);
    }
}
fly(){
    this.slingShot.bodyA=null
}




}