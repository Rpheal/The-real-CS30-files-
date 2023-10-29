// Perlin Noise Project (Terrain Generation)
// Rapheal Oki
// October 5, 2023


// Global variables
let rectWidth = 1; let speed = 0.2; let increase = 0.01; let start = 0;
let height_values = []; let flag; let average; let highestPointX = 0; let highestPointY = 0;

function preload() {
  flag = loadImage("assets/noise-flag.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  imageMode(CENTER);
  strokeWeight(10);
}

function draw() {
  background(255);
  drawTerrain();
  drawFlag(highestPointX, highestPointY);
}

function drawTerrain() {
  let x_offset = start;
  let sum = 0;

  for (let x = 0; x < width; x += rectWidth) {
    let rectHeight = map(noise(x_offset), 0, 1, 0, height);
    height_values.push(rectHeight);

    if (height_values.length > width / rectWidth) {
      height_values.shift(); // keep the array size by removing the  oldest value
    }

    let highestValue = max(height_values); // Find the highest value in the height_values array
    let highestIndex = height_values.indexOf(highestValue); // Find its index

    highestPointX = highestIndex * rectWidth; // Calculating the x-coordinate of the highest point
    highestPointY = height - highestValue; // Set the y-coordinate to the highest value

    noStroke();
    fill(0);
    rect(x, height, x + rectWidth, height - rectHeight);

    x_offset += increase;
  }


  for (let i = 0; i < height_values.length; i += 1) {
    sum += height_values[i];
  }


  let average = sum / height_values.length;
  stroke(255,0,0);
  line(0, average, width, average); // line represnting the average height


  start += speed;
}

function drawFlag(x, y) {
  image(flag, x + rectWidth +rectWidth/2, y-flag.height/2); // make the flag Center at (x, y)
}