// Generative Art - Coolors Demo
// Rapheal
// Oct 25, 2023


let rectWidth = 50; let rectHeight = 20;
let colors = ["#B9C386", "#624E33","#CCBD86","#FED9A2", "#9CA3BD"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width*0.1); // col at 10% across the canvas
  drawColHSB(width*0.4); // col at 40% across the canvas
  drawColCustom(width*0.7); // col at 70% across the canvas
}

function drawColHSB(xPos){
  colorMode(HSB,360);
  for (let y = 0; y<height; y+= rectHeight){
    // fill () HUE 0-360, SATURATION, BRIGHTNESS
    fill(y%360,360,300);
    rect(xPos,y,rectWidth,rectHeight);
  }
}

function drawColCustom(xPos){
  colorMode(RGB);
  let counter = 0;
  for (let y=0; y<height; y+= rectHeight){
    // fill(colors[counter % 5]);
    fill(colors[Math.floor(random(colors.length))]);
    rect(xPos,y,rectWidth,rectHeight);
    counter++;
  }
}

function drawColRGB(xPos){
  colorMode(RGB);
  for (let y = 0; y<height; y+=rectHeight){
    fill(random(255), random(255), random(255));
    rect(xPos,y,rectWidth,rectHeight);
  }
}
