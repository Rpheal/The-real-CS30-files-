// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// GLobal variables
let mouseSide; // numbers would be best for this

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
  
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function updateMouseState(){
  // figure if mouse is left or right
  if (mouseX > width/2){
    mouseSide = "right";
  }
  else mouseSide = "left";
  print(mouseSide)
}
function renderSquares(){
  // drwa the two rectangles on either half of canvas
  rect(0,0,width/2,height); // first square on the left
  rect(width/2,0,width/2,height); // second square starting immediately when the first sqaure stopped
}