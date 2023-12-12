// Bussiness Similator
// Rapheal Oki & Alvin Shen
// 12/11/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let score = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
}


function draw() {
  background(220);
  fill(0);
  text(`Score: ${score}`, width / 2, height / 2);


  // Button
  fill(150, 200, 255);
  rect(width / 2 - 50, height / 2 + 50, 100, 50);
  fill(0);
  text("Click me!", width / 2, height / 2 + 75);
}


function mouseClicked() {
  // Check if the mouse is over the button
  if (
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height / 2 + 50 &&
    mouseY < height / 2 + 100
  ) {
    // Increment the score when the button is clicked
    score++;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
