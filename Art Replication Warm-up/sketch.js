// Art Replication Warm-up
// Rapheal
// 26th October 2023

//description/Hints:

// “Vertical-Horizontal No. 3” The position of the end points of the lines 
// was chosen at random with a uniform probability density. 
// One of the coordinates was then changed alternately to create horizontal and vertical lines.

// Global varaibles
let x1; let x2; let y1; let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1=width/3; y1= height/4; x2 = x1; y2=random(height);
  drawLine();  // draw the art on the canvas
}

function drawLine(){
  strokeWeight(3);
  line(x1,y1,x2,y2);
  for (let x = 0; x<=100; x++){
    // vertical line
    x1=x2; y1=y2; x2=random(width);
    line(x1,y1,x2,y2);
    
    // horizontal line
    x1=x2; y1=y2; y2=random(height);
    line(x1,y1,x2,y2);
  }
}
