// Prrimitive Paint Assignment 
// Rapheal Oki
// 26-09-2023



// Extra for Experts:
// The Commands: 
// Use "a" or "A" key to draw a rectangle;
// Use "s" or "S" key to draw a circle;
// Use "d" or "D" key to draw a Triangle; 
// Use "r" or "R" key to select a random color; 
// Use "f" or "F" key to erase your shapes.




// Global Variables 
let art;
let action = false;
let authorName = "Rapheal";

// The variables for the movement of the balls.
let x = 0;
let y = 200; // half of the height of the screen
let xSpeed = 5;
let ySpeed = 5;


function setup() {
  createCanvas(400,400);
  background(200);
  art = createGraphics(400,400);
  art.background(200);
  art.clear();
  art.fill("blue")
}


function drawAuthorName(){
  // inscribing the name of the author using the text function
  textSize(32);
  textFont("Courier New");
  fill(0);
  text(authorName, (width/2)-55, (height/4) - 50);
}


function generateRandomColor(){
// generate hex format for random colors
  let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
  return hex;
}


function draw() {
  background(200);
  image(art,0,0);

  drawAuthorName();
  fill(45,32,56);
  ellipse(x,y,100);
  
  x = x + xSpeed;
  y = y + ySpeed;
  
  if (x+50 > 400 || x<0) {
    xSpeed = - xSpeed;
  }
  
  if (y+50 > 400 || y-50<0) {
    ySpeed = -ySpeed;
  }
}


function keyTyped() {
    // for user interaction to change the color of the primitive shapes
    if (key==='r' || key==="R") {
      let action = true;
      art.fill(generateRandomColor());
    }
  // Drawing rectangle
  if (key==="a" || key==="A") {
    art.rect(mouseX,mouseY,90,50);
  }

  // drawing ellipse/circles
  if (key==="s" || key==="S") {
    art.ellipse(mouseX,mouseY, 100);
  }

  // drawing triangles
  if (key==="d" || key==="D" ) {
    art.triangle(mouseX,mouseY,mouseX+40,mouseY+40,mouseX-40,mouseY+40);
  }

  // the Erase to make sure that the background Clears one the f key is pressed.
  if (key==="f" || key==="F") {
    art.background(200);
  }
}
