let grid;
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth = 100;
let rectHeight = 100;
let col;
let row;


let pattern = "cross";


function setup() {
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
  randomGrid();
  strokeWeight(5);
}
function randomGrid(){
  grid = new Array(NUM_ROWS);
  for(let i = 0; i<grid.length; i++){
    grid[i] = new Array(NUM_COLS);
  }
  for(let i = 0; i< grid.length; i++){
    for(let j = 0; j< grid[i].length; j++){
      let num = random();
      if(num>= 0.5){
        grid[i][j] = 0;
      }
      else{
        grid[i][j] = 255;
      }
    }


  }
}


function draw() {
  col = getCurrentX();
  row = getCurrentY();
  draw_grid();
  if(Win()){


    fill('#20463E');
    textSize(75);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text("You Win",width/2,height/2);
   
  }
  overlay(getCurrentX()*rectWidth,getCurrentY()*rectHeight);
 


}
function overlay(x,y){
  noStroke();
  fill(125,255,0,40);
  rect(x,y,rectWidth);
 
  if (keyIsDown(SHIFT)){
    rect(x,y,rectWidth);
  }
  else if(pattern === "cross"){
    rect(x-rectWidth,y,rectWidth,rectHeight);
    rect(x+ rectWidth,y,rectWidth,rectHeight);
    rect(x,y-rectHeight,rectWidth,rectHeight);
    rect(x,y+rectHeight,rectWidth,rectHeight);
  }
  else{
    rect(x+rectWidth,y,rectWidth,rectHeight);
    rect(x,y+rectHeight,rectWidth,rectHeight);
    rect(x+rectWidth,y+rectHeight,rectWidth,rectHeight);


  }
}
function mousePressed(){
 
  if (keyIsDown(SHIFT)){
    flip(col,row);
  }
  else if(pattern === "square"){
    flip(col,row);
    if(col<NUM_COLS-1)flip(col+1,row);
    if(row<NUM_ROWS-1) flip(col,row+1);
    if(col<NUM_COLS-1 && row<NUM_ROWS-1 ) flip(col+1,row+1);
  }
  else{
    flip(col,row);
    if(row> 0) flip(col,row-1);
    if(col<NUM_COLS-1)flip(col+1,row);
    if(row<NUM_ROWS-1) flip(col,row+1);
    if(col>0) flip(col-1,row);    
  }
 
}
function keyPressed(){
  if(key === " "){
    pattern = pattern === "cross" ? "square" : "cross";
  }
}
function flip(x,y){
  if(grid[y][x]===0) grid[y][x] = 255;


  else grid[y][x] = 0;
}


function getCurrentX(){
  let constrainX = constrain(mouseX,0,width-1);
  return int(constrainX/rectWidth);
}
function getCurrentY(){
  let constrainY = constrain(mouseY,0,height-1);
  return int(constrainY/rectHeight);


}
function draw_grid(){
  for(let x = 0; x<NUM_COLS;x++){
    for(let y = 0; y<NUM_ROWS;y++){
      let fillValue = grid[y][x];
      stroke(51);
      fill(fillValue);
      rect(rectWidth*x,rectHeight*y,rectWidth,rectHeight);
    }


  }
}
function Win(){
  let sum = 0;
  for(let x = 0; x<NUM_COLS;x++){
    for(let y = 0; y<NUM_ROWS;y++){
      sum += grid[y][x];
    }
  }


  return sum === 0 || sum === 255 * NUM_COLS * NUM_ROWS;
}

