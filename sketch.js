const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;
var Divisions=[]
var Plinko=[]
var particles=[]
function setup() {
  createCanvas(400,600);
  engine = Engine.create();
world = engine.world;
Engine.run(engine)
ground1=new Ground(200,590,400,20)
//division1=new divisions(200,500,10,200)
for(var i =50; i<400;i=i+70){
  Divisions.push(new divisions(i,500,10,200))
}
for (var d =30;d<400;d=d+50){
  Plinko.push(new plinko(d,70,10))
}
for (var a =60;a<400;a=a+50){
  Plinko.push(new plinko(a,140,10))
}
for (var c =30;c<400;c=c+50){
  Plinko.push(new plinko(c,210,10))
}
for (var f =60;f<400;f=f+50){
  Plinko.push(new plinko(f,280,10))
}

}

function draw() {
  background('black');  
  drawSprites();
  ground1.display()
 // division1.display()j<
 for(var j=0;j<Divisions.length;j=j+1){
   Divisions[j].display()
 }
 for(var g=0;g<Plinko.length;g=g+1){
  Plinko[g].display()
}
 for(var b=0;b<Plinko.length;b=b+1){
  Plinko[b].display()
}
for(var e=0;e<Plinko.length;e=e+1){
  Plinko[e].display()
}
for(var z=0;z<Plinko.length;z=z+1){
  Plinko[z].display()
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
for(var l=0;l<particles.length;l=l+1){
  particles[l].display()
}
}
