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
  canvas = createCanvas(0.8*windowWidth,0.8*windowHeight);
  tint(200,120);
  image(bbg,0,0);
  filter(BLUR,3);
  // canvas.style('z-index','-1');
  // canvas.style('position','absolute');
  // canvas.style('top','230px')
  for(j=0;j<15;j++){
      x = random(0,0.8*windowWidth);
      y = random(0.2*windowHeight,0.8*windowHeight);
      z = random(10,30);
      nodes[j] = new Node(x,y,z);
  }
}
function windowResized() {
  resizeCanvas(0.8*windowWidth,0.8* windowHeight);
}
function draw(){
  background(0);
  for (i = 0; i < nodes.length; i++) {
    nodes[i].make();
    nodes[i].random();
  }

  // setAlpha(50);
}
