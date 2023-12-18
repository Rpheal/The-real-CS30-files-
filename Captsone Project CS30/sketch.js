// Business Simulator
// Rapheal Oki & Alvin Shen
// 12/11/2023
//
// Extra for Experts:
// -

let score = 0; let balance = 10000; let stockPrice = 100;
let stocksOwned = 0; let buyStockButton; let sellStockButton;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);


  buyStockButton = new Button({
		x: width / 3,	y: 190,
		width: 100,		height: 50, // properties of the button
    //style.background('green');
		content: 'Buy',
		on_press() {
      buyStock();
		}
	});

  buyStockButton.style("style_default",style.background="#000");


  sellStockButton = new Button({
		x: width / 3+150,	y: 190,
		width: 100,		height: 50, // properties of the button
		content: 'Sell',
		on_press() {
      sellStock();
		}
	});

}


function draw() {
  background(220);
  fill(0);
  displayInfo();
  text(`Money: ${score}`, width / 2, height / 2);
  sellStockButton.draw();
  buyStockButton.draw();


  // Button
  fill(150, 200, 255);
  rectMode(CORNER);
  rect(width / 2 - 80, height / 2 + 50, 160, 50, 15);
  fill(0);
  text("Click me!", width / 2, height / 2 + 75);
}


function mouseClicked() {
  // Check if the mouse is over the button
  if (
    mouseX > width / 2 - 80 &&
    mouseX < width / 2 + 80 &&
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


function displayInfo() {
  fill(0);
  textSize(16);
  text(`Balance: $${balance.toFixed(2)}`, width/3, 30);
  text(`Stock Price: $${stockPrice.toFixed(2)}`, width/3, 60);
  text(`Stocks Owned: ${stocksOwned}`, width/3, 90);
  text(`Portfolio Value: $${(balance + stocksOwned * stockPrice).toFixed(2)}`, width/3, 120);
}


function buyStock() {
  if (balance >= stockPrice) {
    stocksOwned++;
    balance -= stockPrice;
    updateStockPrice();
  } else {
    alert('Not enough balance to buy stocks.');
  }
}


function sellStock() {
  if (stocksOwned > 0) {
    stocksOwned--;
    balance += stockPrice;
    updateStockPrice();
  } else {
    alert('No stocks to sell.');
  }
}


function updateStockPrice() {
  stockPrice = random(80, 120);
}

