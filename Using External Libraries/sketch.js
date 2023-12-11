// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let circleD = 100; let scribble;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (collideRectCircle(mouseX, mouseY,120,60,width/2,height/2,circleD)){
    fill(255,255,0);
  }
  else{
    fill(255);
  }
  circle(width/2, height/2, circleD);
  rect(mouseX, mouseY, 120,60);
  // scribble.scribbleRect()
}
