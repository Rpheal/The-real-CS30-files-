// split() method and spread Syntax
// Rapheal Oki
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// global variables
let grid, img, rows, cols, colorMap;

function preload() {
  img = loadStrings("assets/image.txt");
}

function setup() {
  // img will hold an array of strings. The length of the first string wil correspond
  // with the number of columns in the image. The number of strings in total (length of img)
  // will tell us the total rows in the image.
  cols = img[0].length;
  rows = img.length;
  createCanvas(windowWidth, windowHeight);

  // put the text file's data in our 2D array
  grid = [];
  for (let i = 0; i < img.length; i++) {
    grid.push([...img[i]]);
  }

  // create a Map() to keep track of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"]
  ]);
}


function renderGrid(){
  // calculate the grid size:
  let cellWidth = width/cols; let cellHeight = height/rows;

  // visit each location in the 2D array, draw a grid
  for (let x=0; x,cols; x++){
    for (let y = 0; y<rows; y++){
      let currentKey = grid[y][x];
      fill(coloMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight,cellWidth,cellHeight);
    }
  }
}


functon windowResized(){
  
}
// function partOne(){

//let textFile;
// textFile = loadStrings("/assets/info.txt");

//   print("SPLIT INTO WORDS: ");
//   let stringSplit = textFile[0].split(" ");
//   print(stringSplit);

//   print("SPLIT INTO CHARS:");
//   let stringSplit2 = textFile[1].split("");
//   print(stringSplit2);

//   print("SPREAD SYNTAX FOR CHARS");
//   let stringSpread = [...textFile[1]];
//   print(stringSpread);
// }