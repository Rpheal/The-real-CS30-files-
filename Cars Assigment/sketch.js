// Project Title
// Rapheal
// October 17th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  fill(0);
  drawRoad();
}


function drawRoad(){
  rect(0,height/5,width,height/1.9);
  for(let i=0; i < width; i+=10){
    fill(255);
    strokeWeight(4);
    line(0+i,height/1.9/2,i,height/1.9/2);
  }
}