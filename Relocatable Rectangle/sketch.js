// Relocatable rectangles
// Rapheal
// 27-09-2023
//
// Extra for Experts:
// hover effect + mouse drag objects



// Global variable
let x,y, rHeight, rWidth; //(x,y) will be center referenced.
let rLeft, rRight, rTop, rBottom;   // edge positions of our rectangle


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  rHeight = 100;
  rWidth = 200;
}


function updateEdgePositions(){
  // update the right/left/top/bottom of our rectangle
  rLeft = x - rWidth/2; 
  rHeight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}

function drawRectangle(){
  // render rectangle and checks for mouse interactions
  updateEdgePositions();
  print(rLeft + " " + rRight + " " + rTop + " " + rBottom);
}

function draw() {
  background(220);
  drawRectangle();
}
