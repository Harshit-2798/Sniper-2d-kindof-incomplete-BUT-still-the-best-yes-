class Ground {
    constructor(x,y){
        var option = {
            isStatic:true,
       restitution:0,
       density:0.5,
       speed:10
        }
       this.body=Bodies.rectangle(x,y,1000,20,option)
     this.width=1000
     this.height=20
       World.add(world,this.body)
     
       
        }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
       
        
        
    }
    }