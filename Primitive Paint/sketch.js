// Prrimitive Paint Assignment 
// Rapheal Oki
// 26-09-2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

let authorName = "Rapheal";
let action = true;



function generateRandomColor(){
// generate hex format for random colors
  let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
  return hex;
}

function draw() {
  textSize(32);
  textFont("Courier New");
  fill(0);
  text(authorName, width/2, (height/4) - 50);
  text(authorName, width/2, (height/6) - 50);
  autonomousArt()
  
}


function keyTyped() {
  // Drawing rectangle
  if (key === "a") {
    fill(generateRandomColor());
    rect(mouseX,mouseY,50,50);
  }

  if (key === "s") {
    fill(generateRandomColor());
    ellipse(mouseX,mouseY, 100);
  }

  if (key === "d") {
    fill(generateRandomColor());
    triangle(mouseX,mouseY,mouseX+40,mouseY+40,mouseX-40,mouseY+40);
  }
}



function autonomousArt(){
  // Creating a visual element that works independently of the user's interaction
  
  fill(generateRandomColor());
  circle(0, height/2, 100);
  for (let i = 0; i <= width; i++){
    circle(i,height/2, 100);
  }
}