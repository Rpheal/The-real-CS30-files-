// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  grid(); // generate a single images
}

function diagonalAscending(x,y,s){
  line(x-s/2,y+s/2, x+s/2,y-s/2);
}


function diagonalDescending(x,y,s){
  line(x-s/2,y-s/2,x+s/2,y+s/2);
}
function grid(){ // find all our x and y positions
  for (let x = 0; x < width; x+= spacing){
    for (let y = 0; y< height; y+=spacing){
      let choice = Math.floor(random(2));
      if (choice===0) diagonalDescending(x,y,spacing);
      else if (choice ===1) diagonalAscending(x,y,spacing);
      
    }
  }
}

function draw() {
  // background(220);
}


