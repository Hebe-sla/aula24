class Canhao {
  constructor(x, y, width, height, angulo) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angulo = angulo;
    this.basedocanhao=loadImage("assets/cannonBase.png")
    this.canhao=loadImage("assets/canhao.png")
  }
  exibir(){
   image(this.basedocanhao,70,20,200,200)
   push()
   translate(this.x,this.y)
   rotate(this.angulo)
   imageMode(CENTER)
   image(this.canhao,0,0,this.width,this.height)
   pop()
  if(keyIsDown(RIGHT_ARROW)&&this.angulo<70){
    this.angulo = this.angulo+1;
  
  }
  if(keyIsDown(LEFT_ARROW)&&this.angulo>-30){
    this.angulo = this.angulo-1;
  }
  }

}
