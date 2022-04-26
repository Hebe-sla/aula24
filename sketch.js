const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var bolasdecanhao=[]
var canvas, angulo, tower, ground, canhao;
var barco 
var barcos=[]


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
  barco=new Barco(width,height-50,170,170,-70) 
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

 
  for(var i=0;i< bolasdecanhao.length; i=i+1){
exibirbolas(bolasdecanhao[i])
  } 
  canhao.exibir()
  exibirbarcos()
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
  function exibirbolas(boladecanhao,indice){
    if(boladecanhao){
    boladecanhao.exibir()
    if(boladecanhao.body.position.x>=width||boladecanhao.body.position.y>=height-50){
    boladecanhao.remove(indice)
    }
    }
  }
  function exibirbarcos(){
    if(barcos.length>0){
      if(barcos[barcos.length-1]===undefined||barcos[barcos.length-1].body.position.x<width-300){
          var position=[-40,-60,-70,-20]
          var aleatorio=random(position)
          barco=new Barco(width,height-50,170,170,aleatorio)
          barcos.push(barco)  
      }
      for(var i=0;i<barcos.length;i=i+1){
        if(barcos[i]){
           barcos[i].exibir()
           Matter.Body.setVelocity(barcos[i].body,{x:-0.9,y:0})
        }
      }
    }else{
      barco=new Barco(width,height-50,170,170,-70)
      barcos.push(barco)
    }
  }
  function colisao(indice){
    for(var i=0;i<barcos.length;i=i+1){
      if(bolasdecanhao[indice]!==undefined&&barcos[i]!==undefined){
          var colisao2=Matter.SAT.collides(bolasdecanhao[indice].body,barcos[i].body)
          if(colisao2.collided){
              barcos[i].remove(i)
              Matter.Word.remove(world,bolasdecanhao[indice].body)
            delete bolasdecanhao[indice]
          }
      }
    }

  }