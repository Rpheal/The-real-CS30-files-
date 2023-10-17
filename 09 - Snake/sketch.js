// Basic Snake Mechanics
// Rapheal
// October 11, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global variable 
let points = []; //snake coordinates 
let headLocation;

function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new point(width/2, height/2);
  initSnake();
}

function draw() {
  background(220);
}

function initSnake(){
  points.push(new Point(point(10,10)))
}

function cratePoints(){
  if(keyCode===RIGHT)
  
}