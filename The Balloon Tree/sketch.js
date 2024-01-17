// The Balloon Tree
// Rapheal Oki
// 30/12/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let scl;
let depth = 7;
let slider;
let sliderdepth;
let sliderscl;
let leafdepth = 1;
let startingcolors;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(42);
  angleMode(DEGREES);




  // Set the position of the sliders
  let sliderX = 20;
  let sliderY = height *0.9;
  slider = createSlider(0, 360, 25, 0.01);
  slider.position(sliderX, sliderY);




  sliderdepth = createSlider(1, 10, 5, 1);
  sliderdepth.position(sliderX, sliderY + 30);




  sliderscl = createSlider(1, 50, 5, 0.1);
  sliderscl.position(sliderX, sliderY + 60);




  startingcolors = random(255);
}




function draw() {
  background(255);
  randomSeed(startingcolors); // Set a fixed seed value




  // Update the depth based on the slider value
  depth = sliderdepth.value();
  scl = sliderscl.value();




  drawTree(width / 2, height * 0.9, 90, depth);
}




function drawLine(x1, y1, x2, y2, thickness) {
  // draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(thickness);
  line(x1, y1, x2, y2);
}




function drawTree(x1, y1, angle, depth) {
  let x2 = x1 + cos(angle) * depth * scl;
  let y2 = y1 - sin(angle) * depth * scl;




  if (depth > 0) {
    let thickness = map(depth, 0, 7, 0.1, 4);
    drawLine(x1, y1, x2, y2, thickness);




    // for a 2-branch tree:
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle - slider.value(), depth - 1);
    drawTree(x2, y2, angle + slider.value(), depth - 1);




    if (depth < leafdepth) {
      drawLeaf(x2, y2, depth);
    }
  }
}




function drawLeaf(x, y, leafdepth) {
  fill(random(255), random(255), random(255));
  let leafSize = map(depth, 0, leafdepth+1, 1, 10); // Random Leaf size based on depth
  circle(x, y, leafSize);
}




function keyPressed() {
  if (key === "z" && leafdepth > 1) {
    leafdepth--; // Reduce levels
  }
  else if (key === "x" && leafdepth < depth) {
    leafdepth++; // Increase levels
  }
}