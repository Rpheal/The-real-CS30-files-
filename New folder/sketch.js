// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global varaibles
let x1;
let x2;
let y1;
let y2;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x1=width/3; y1= height/4; x2 = x1; y2=random(height);
  drawLine();
}

function drawLine(){
  strokeWeight(3);
  line(x1,y1,x2,y2);
  for (let x = 0; x<=100; x++){
    // vertical line
    x1=x2; y1=y2; x2=random(width);
    line(x1,y1,x2,y2);
    
    // horizontal line
    x1=x2; y1=y2;
    line(x1,y1,y1,y2);
  }
}


// function draw() {
//   background(220);
// }
