// Prrimitive Paint Assignment 
// Rapheal Oki
// 26-09-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// Global Variables 
let art;
let action = true;
let authorName = "Rapheal";

// The variables for the movement of the balls.
let x = 0;
let y = 200; // half of the height of the screen
let xSpeed = 5;
let ySpeed = 5;


function setup() {
  createCanvas(400,400);
  background(255);
  art = createGraphics(400,400);
  art.background(255);
  art.clear();
}


function drawAuthorName(){
  // inscribing the name of the author using the text function
  textSize(32);
  textFont("Courier New");
  fill(0);
  text(authorName, width/2, (height/4) - 50);
}


function generateRandomColor(){
// generate hex format for random colors
  let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
  return hex;
}


function draw() {
  background(255);
  image(art,0,0);

  drawAuthorName();
  fill(45,32,56);
  ellipse(x,y,100);
  
  x = x + xSpeed;
  y = y + ySpeed;
  
  if (x+50 > 400 || x<0) {
    xSpeed = - xSpeed;
  }
  
  if (y+50 > 400 || y<0) {
    ySpeed = -ySpeed;
  }
}


function keyTyped() {
  // Drawing rectangle
  if (key === "a") {
    art.fill(generateRandomColor());
    art.rect(mouseX,mouseY,50,50);
  }

  // drawing ellipse/circles
  if (key === "s") {
    art.fill(generateRandomColor());
    art.ellipse(mouseX,mouseY, 100);
  }

  // drawing triangles
  if (key === "d") {
    art.fill(generateRandomColor());
    art.triangle(mouseX,mouseY,mouseX+40,mouseY+40,mouseX-40,mouseY+40);
  }

  // the Erase to make sure that the background Clears one the f key is pressed.
  if (key === "f") {
    art.background(255);
  }
  
}
