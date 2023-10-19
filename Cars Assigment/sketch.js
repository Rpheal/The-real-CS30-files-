// Project Title
// Rapheal
// October 17th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(200);
  drawRoad();
}


function drawRoad(){
  fill(0);
  rect(width/2,height/2,width,height/1.9);
  stroke(255, 255, 0);
  strokeWeight(6);
  for(let i=0; i < width; i+=100){
    line(i,height/2,i+50  ,height/2);
  }
}