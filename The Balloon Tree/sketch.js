// The Balloon Tree
// Rapheal Oki
// 30/12/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let depth = 7; let leafdepth = 0; let startingcolors; 
const scale =  20;

let angleOffset;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(42);
  angleMode(DEGREES);

  startingcolors = random(255);
}




function draw() {
  background(255);
  randomSeed(startingcolors); 
 

  angleOffset = map(mouseX,0,width,0,180);
  drawTree(width / 2, height * 0.9, 90, depth);
}




function drawLine(x1, y1, x2, y2, thickness) {
  // draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(thickness);
  line(x1, y1, x2, y2);
}




function drawTree(x1, y1, angle, depth) {
  let x2 = x1 + cos(angle) * depth * scale;
  let y2 = y1 - sin(angle) * depth * scale;



  if (depth > 0) {
    let thickness = map(depth, 1, 7, 0.1, 5);
    drawLine(x1, y1, x2, y2, thickness);




    // for a 2-branch tree:
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle - angleOffset, depth - 1);
    drawTree(x2, y2, angle + angleOffset, depth - 1);




    if (depth < leafdepth) {
      drawLeaf(x2, y2, depth);
    }
  }
}




function drawLeaf(x, y, leafdepth) {
  fill(random(255), random(255), random(255));
  let leafSize = map(depth, 0, leafdepth+1, 1, 10);
  leafSize = leafSize * random(0.1,1);
  
  circle(x, y, leafSize);
}




function keyPressed() {
  if (key === "z" && leafdepth > 1) {
    leafdepth--; // Reduce levels
  }
  else if (key === "x" && leafdepth < 5) {
    leafdepth++; // Increase levels
  }
}