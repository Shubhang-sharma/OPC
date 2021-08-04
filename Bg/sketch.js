var canvas;
let nodes = [];
let DNA;
let z;
let j = 0;
function preload(){
  DNA = loadImage('Bg/DNA.png');
  bbg = loadImage('Bg/blurbg.png');
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  tint(200,120);
  image(bbg,0,0);
  filter(BLUR,3);
  canvas.style('z-index','-1');
  for(j=0;j<15;j++){
      x = random(0,windowWidth);
      y = random(0,windowHeight);
      z = random(10,30);
      nodes[j] = new Node(x,y,z);
  }
}
function draw(){
  background(0);
  for (i = 0; i < nodes.length; i++) {
    nodes[i].make();
    nodes[i].random();
  }

  // setAlpha(50);
}
