// Multi color Grid
// Rapheal
// 10-03-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global variable
let x=50; let y=50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
  

}

function draw() {
  // background(220);

}

function drawGrid(){
  fill(random(255),random(255),random(255));
  for(let x=0; x<width; x=x+20){
    for(let y=0; y<height; y=y+20){
      line(x,0,x,height);
      line(0,y,width,y);
    }
  }
}
