// draqing wityh loops
// Rapheal
// Sept 25, 2023
//
// Extra for Experts:
// using single and nested loops for drawing purposes





// Drawing With Loops
// Stefan Scott 
// Sept 25, 2023
// Using single and nested loops for drawing purposes.

// Global Variables
let numSegments = 30;
let segmentHeight;
let currentBackground = 0; //state variable (0-2)

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function gradient(){
  // draw a series of skinny rectangles → gradient
  noStroke();
  for(let i = 0; i < numSegments; i++){
    let y = i * segmentHeight; 
    let c = map(y,0,height,0,255);
    fill(c,255-c,255);  //↑R  ↓G  Max-Blue
    rect(0,y,width,segmentHeight); 
  }
  stroke(0);
}

function selectBackground(){
  // check the state variable currentBackground
  // and render the appropriate one.
  if(currentBackground===0) gradient();
  else if (currentBackground===1)background(255);
  else background(60,240,120);
}

function draw() {
  selectBackground();
}

function mousePressed(){
  print(mouseButton);
  if(mouseButton===LEFT){
    currentBackground -= 1;
    if(currentBackground < 0)currentBackground=2;
  }
  if(mouseButton===CENTER){
    currentBackground += 1;
    if(currentBackground > 2)currentBackground=0;
  }
  return false; //DOESNT WORK override the default behavior
}


// Still working on it 