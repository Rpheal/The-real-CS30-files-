// Cubic Disarray Demo
// Rapheal
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  drawRectangles(); // generate a single image
}

function drawRectangles(){
  for (let x = squareSize/2; x < width-squareSize/2; x+= squareSize){
    for (let y = squareSize/2; y< height-squareSize/2; y+= squareSize){
      push();
      translate(x,y);
      let rAmount = map(y,0,height,0,45);
      rotate(radians(random(-rAmount,rAmount)));
      let offset = map(y,0,height,0,15);
      square(random(-offset,offset)/3,random(-offset,offset),squareSize);
      pop();
    }
  }
}

function draw() {
  // background(220);
}
