class Bomb {
constructor(x,y,r){
    var option = {
        isStatic:false,
   restitution:0,
   density:0.5,
   speed:10
    }
   this.body=Bodies.circle(x,y,r,option)
   this.r=r
   World.add(world,this.body)
   this.image = loadImage("terrorist 3.gif")
   
    }
display(){
    var pos = this.body.position
   
    image(this.image,pos.x,pos.y,pos.r) 
    imageMode(RADIUS)
}
}