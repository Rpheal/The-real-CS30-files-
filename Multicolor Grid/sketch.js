// Multi color Grid
// Rapheal  
// 10-03-2023
//
// Explanation:
// Multicolor Grid, draws a grid with beautiful random colors on the screen and the grid
// fills the whole screen according to screen size.

// Commands:
// Use RIGHT mouse Click to increase the square size.
// Use LEFT mouse Click to reduce the sqaure size.
// Use the ENTER button on the keyboard to create a new grid wth random or different colors.



// Global variable
let x=50; let y=50; let gridSpace = 20;

function setup() {
  // Disable the normal right click functio of the browser
  document.addEventListener("contextmenu", event => event.preventDefault())
  createCanvas(windowWidth, windowHeight);
  drawGrid(); // initialising or rendering the grid

}

function draw() {
  // background(220);

}

function drawGrid(){
  // draw the grid on the screen
  for(let x=0; x<width; x=x+gridSpace){
    for(let y=0; y<height; y=y+gridSpace){
      fill(random(255),random(255),random(255));
      square(x,y,gridSpace);
    }
  }

}

function mousePressed() {
  // to add more functionality when the mouse is pressed
  if (mouseButton === LEFT) {
    gridSpace -= 2; // Decrease grid spacing on left click
  }
  if (mouseButton === RIGHT) {
    gridSpace += 2; // Increase grid spacing on right click
  }
  // Redrawing the grid with the updated grid spacing
  drawGrid();
}

function keyPressed(){
  // to make the screen referesh with new random colors.

  if (keyCode===ENTER){
    fill(random(255),random(255),random(255));
    }

  drawGrid(); // redrawing the grid with new random colors
}
