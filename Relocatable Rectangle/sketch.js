// Relocatable rectangles
// Rapheal
// 27-09-2023
//
// Extra for Experts:
// hover effect + mouse drag objects



// Global variable
let x,y, rHeight, rWidth; //(x,y) will be center referenced.
let rLeft, rRight, rTop, rBottom;   // edge positions of our rectangle
let mouseOver = false; // are we hovering over the rectangle
let pickedUp = false; // are we currently moving the object
let offX,offY; // so object does not snap to mouse


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
  rRight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}

function drawRectangle(){
  // render rectangle and checks for mouse interactions
  updateEdgePositions();
  print(rLeft + " " + rRight + " " + rTop + " " + rBottom);


  // Are we in the region
  if (mouseX>rLeft && mouseX<rRight && mouseY>rTop && mouseY<rBottom) {
    fill(70,230,54);
    mouseOver = true;
  }
  
  else{
    fill(30,70,170);
    mouseOver = false;
  }

  if (pickedUp){
    x = mouseX - offX;
    y = mouseY - offY;
  }

  // finally drawing the triangle
  rect(x,y,rWidth,rHeight);
}

function draw() {
  background(220);
  drawRectangle();
}

function mousePressed(){
  if (mouseOver){
    pickedUp = true;
    offX = mouseX - x;
    offY = mouseY - y;
  }

}


function mouseReleased(){
  pickedUp = false;
}