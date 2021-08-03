class Node {
  constructor(x, y,) {
    this.x = x;
    this.y = x;
    }
  make() {
    image(DNA,this.x,this.y);
    // fill("#7e8786",);
    // stroke('#7e8786');
    //  circle(this.x, this.y, this.r);
  }
  random(){
    this.y = this.y + random(-0.3,0.3);
    this.x = this.x + random(-0.3,0.3);
  }
}
