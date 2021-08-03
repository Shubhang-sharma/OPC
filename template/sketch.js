var canvas;
let nodes = [];
let DNA;
// let j = 0;
function preload(){
  DNA = loadImage('DNA.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  // canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0,0);
  // canvas.style('z-index','-1');
  for(j=0;j<10;j++){
      x = random(0,windowWidth);
      y = random(0,windowHeight);
      DNA.resize(random(0,500),0);     
      nodes[j] = new Node(x,y);
  }
}
function draw(){
  background(20);
  for (i = 0; i < nodes.length; i++) {
    nodes[i].make();
    nodes[i].random();
    // nodes[i].dsize();
  }
}
