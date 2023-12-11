// Recurs
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  cCircle(width/2, height/2, width);
}


function cCircle(x,y,d){
  print(1);
  if (d > 10){
    // do some work and recurse
    circle (x,y,d);
    cCircle(x,y,d/1.1);

  }
  // if that wasn't true, function ends (base case)
}