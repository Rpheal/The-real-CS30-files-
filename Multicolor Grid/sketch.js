// Multi color Grid
// Rapheal
// 10-03-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global variable
let x=50; let y=50;
let gridSpace = 20;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault())
  createCanvas(windowWidth, windowHeight);
  drawGrid();
  

}

function draw() {
  // background(220);

}

function drawGrid(){
  for(let x=0; x<width; x=x+gridSpace){
    for(let y=0; y<height; y=y+gridSpace){
      fill(random(255),random(255),random(255));
      square(x,y,gridSpace);
    }
  }
}
