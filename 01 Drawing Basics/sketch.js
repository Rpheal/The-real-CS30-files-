// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let busx =0, busy=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // start drawing our bus
  drawBus()



}


 function moveBus(){
  // Moving the bus
   if (keyIsPressed){
    if (keyCode === LEFT_ARROW) {
      busX = busX - 10;
    if (key)
    }
   }

 }
function drawBus(){
  // Drawing the bus
  fill(255);
  rect(50+busx,50,100,50);
  fill(0);
  circle(80+busx,100,20);
  circle(120+busx,100,20);
}

// function keyPresses(){
//   print("Key: ", key, "\tKeycode: ", keycode);
//   if (keyCode===RIGHT_ARROW)(
//   busx= busx + 10;
//   )
//   if (keyCode===LEFT_ARROWT_ARROW)(
//     busx= busx - 10;
//     )
// }