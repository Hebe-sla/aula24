class Barco {
    constructor(x,y,width, height,barcoy){
        this.body=Bodies.rectangle(x,y,width, height)
        this.width=width
        this.height=height
        this.barcoy=barcoy
        this.image=loadImage("./assets/boat.png")
        World.add(world, this.body);
    }
    exibir(){
        var pos=this.body.position
        var angulo=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angulo)
        imageMode(CENTER)
        image(this.image,0,this.barcoy,this.width,this.height)
        pop()        
    }
    remove(){
        setTimeout(() => {
            Matter.Word.remove(world,barcos[indice].body)
            delete barcos[indice] 
        }, 2000);
    }
}

