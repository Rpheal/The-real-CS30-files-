// Round Racer
// Rapheal
// october 2nd, 2023
//
// Extra for Experts:
// First class Assignment

// GLobal variables

let r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  r = new RoundRacer(height/2,"red");
}

function draw() {
  background(220);
}


class RoundRacer {
  //
  constructor(yPosition,color){
    this.yPosition = yPosition;
    this.color = color;
    this.xPosition = 0;
    this.xSpeed = Math.floor(random(3,15));

  }

  display(){
    // Do something
    fill(this.color);
    ellipse(this.xPosition,this.yPosition,50);
  }

  move(){
    // Do something
  }
}