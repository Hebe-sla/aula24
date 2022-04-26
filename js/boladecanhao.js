class Boladecanhao{
    constructor(x,y){
            var opicoes={
                isStatic:true 
            }
            this.raio=30
            this.body=Bodies.circle(x,y,this.raio,opicoes)
            this.image=loadImage("./assets/cannonball.png")
            World.add(world, this.body);
        }
    exibir(){
        var pos=this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.raio,this.raio)
        pop()        
    }
    shoot() {
        var newAngle = cannon.angle - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
      }
      remove(){
        Matter.Body.setVelocity(this.body, {x:0,y:0})
        setTimeout(() => {
            Matter.Word.remove(world,this.body)
            delete boladecanhao[indice] 
        }, 2000);
    }
}