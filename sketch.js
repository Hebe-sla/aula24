const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var bolasdecanhao=[]
var canvas, angulo, tower, ground, canhao;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  angleMode(DEGREES)
  angulo=20
  canhao=new Canhao(180,110,130,100,angulo)
  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

  canhao.exibir()
  for(var i=0;i< bolasdecanhao.length; i=i+1){
exibirbolas(bolasdecanhao[i])
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bolasdecanhao[bolasdecanhao.length-1].shoot()
}
  }
  function keyPressed(){
    if(keyCode===DOWN_ARROW){
      boladecanhao=new Boladecanhao(canhao.x,canhao.y)
      bolasdecanhao.push(boladecanhao)
    } 
  }
  function exibirbolas(boladecanhao){
    if(boladecanhao){
    boladecanhao.exibir()
    }
  }