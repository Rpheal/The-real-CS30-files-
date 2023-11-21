// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  boxes();
}


function boxes(){
  for (let i = 0; i<5; i++){
    stroke(5);
    strokeWeight(6);
    square(width/2+4,height/2+4, 200);
  }

}