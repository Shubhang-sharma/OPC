class Node {
  constructor(x, y,w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = w*(279/107);
    }
  make() {
    image(DNA,this.x,this.y,this.w,this.h);
    // fill("#7e8786",);
    // stroke('#7e8786');
    //  circle(this.x, this.y, this.r);
  }
  random(){
    this.y = this.y + random(-1,1);
    this.x = this.x + random(-1,1);
  }
}
