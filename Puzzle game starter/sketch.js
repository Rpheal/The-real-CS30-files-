// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid =
[[255,  0,  255,   0,  255],
 [0,   0,    0,    255,  0  ],
 [255, 255,  0,    255,  0  ],
 [255, 0,    0,    255,  0 ]];

const NUM_ROWS = 4;  const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;

function setup() {
  rectWidth = 50;  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight);
}

function draw() {
  row = getCurrentY();   col = getCurrentX();
  background(220);
  renderGrid();
  print(col,row); //prints x,y
}

function getCurrentX(){ //determine current column mouse is in, and return
  let constrainMouseX = constrain(mouseX, 0, width-1);
  return floor(constrainMouseX/rectWidth);  
}
function getCurrentY(){ //determine current row mouse is in, and return
  let constrainMouseY = constrain(mouseY, 0, height-1);
  return floor(constrainMouseY/rectHeight);
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D array for the corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //x:    0,   1,   2,  3,   4
      //posx  0   50, 100, 150,200   expression? x→posx
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}