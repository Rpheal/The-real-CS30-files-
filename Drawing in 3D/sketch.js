// 3D Primiitives and CSS Centering
// Rapheal
// Nov 23, 2023
// Making a Fractal in 3D? Load an STL


function setup() {
  createCanvas(400,400, WEBGL);
}

function draw() {
  background(0);
  translate(50,50);
  rotateY(radians(frameCount));
  rotateX(radians(frameCount));
  box(100);
}
