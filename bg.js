var canvas;
let nodes = [];
let j = 0;
function preload(){
  DNA = loadimage('DNA.jpg.png');
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  for(j=0;j<10;j++){
      nodes[j] = new Node(random(0,windowWidth), random(0,windowHeight));
  }
}
function draw(){
  background(0);

  for (i = 0; i < nodes.length; i++) {
    nodes[i].make();
    nodes[i].random();
  }
}

class Node {
  constructor(x, y, b, r= 12) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  make() {
    image(DNA,this.x,this.y)
    // fill("#7e8786",);
    // stroke('#7e8786');
    //  circle(this.x, this.y, this.r);
  }
  random(){
    this.y = this.y + random(-0.3,0.3);
    this.x = this.x + random(-0.3,0.3);
  }

  }

}
