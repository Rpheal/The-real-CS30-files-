// 
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global variables 
let rectWidth = 1;
let rectNoise = 20;
const noiseShift = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  

}

function draw() {
  rectNoise = 20;
  background(220);
  generateTerrain();


}


function generateTerrain(){
  // usinig a loop, create a number of side by side
  // rectangles, coming up form the bottom of the canvas
  for (let x = 0; x<width; x+= rectWidth ) {
    // puickk a random height 
    // let sectionHeight = random(0,height);
    let sectionHeight = noise(rectNoise);
    sectionHeight = map(sectionHeight,0,1,0,height);
    rectNoise+= noiseShift;


    rect(x,height,x+rectWidth,height-sectionHeight);
  }
}