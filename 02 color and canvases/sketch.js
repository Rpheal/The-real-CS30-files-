// Color and Canvases Practice
// Rapheal Oki
// 09-13-2023
//
// Extra for Experts:
//Practice using color variables, layers, animations



function setup() {
  createCanvas(windowWidth, windowHeight);

  ballX = width/2;
  ballY = height/2;
  // Global variables
let ballX = width/2, ballY=height/2, ballSize=30;
let xspeed =5, yspeed=0;
}





function draw() {
  background(220);
  moveAndDrawBall();
}


function moveAndDrawBall(){
  //update the position

  //update the direection (i.e bounce)


  //render or draw the ball

  fill(0);
  circle(ballX,ballY,ballSize);

}







// draw triangle


function drawTriangle (){
  
}