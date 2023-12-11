// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,10);
  
}

function draw() {
  
  translate(width/2,height/2);
  stroke(random(255),random(255),random(255),10);
  strokeWeight(16);
  let v = p5.Vector.random2D();
  v.mult(random(100,600));
  line(0,0,v.x,v.y);
}

// function lineInCircles(diameter){
//   fill('blue');
//   circle(width/2, height/2, diameter);
//   stroke('white');
//   line(width/2, height/2+ diameter/2, width/2, height/2-diameter/2);
// }