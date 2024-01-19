class Stock {
  constructor(name, initialPrice, volatility) {
    this.name = name;
    this.price = initialPrice;
    this.history = [];
    this.volatility = volatility;
    this.quantity = 0;
  }

  updatePrice() {
    // Simulate a random walk model
    let randomChange = randomGaussian(0, this.volatility);
    this.price += randomChange;

    // Ensure the price doesn't go negative
    this.price = max(this.price, 0);

    // Store the current stock price in the history array
    this.history.push(this.price);

    // Trim the history array to keep only the last 30 values
    if (this.history.length > 30) {
      this.history.shift();
    }
  }

  drawGraph(x, y, width, height) {
    // Draw the stock price graph
    noFill();
    stroke(0, 0, 255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let graphX = map(i, 0, this.history.length - 1, x, x + width);
      let graphY = map(this.history[i], min(this.history), max(this.history), y + height, y);
      vertex(graphX, graphY);
    }
    endShape();

    // Draw graph border
    noFill();
    stroke(200);
    strokeWeight(1);
    rect(x, y, width, height);
  }
}

class Button {
  constructor(label, x, y, width, height, onClick) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
  }

  display() {
    fill(150);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.width / 2, this.y + this.height / 2);
  }

  isClicked(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

class User {
  constructor() {
    this.balance = 1000;
    this.holdings = [];
  }

  buyStock(stock, quantity) {
    let totalCost = stock.price * quantity;
    if (this.balance >= totalCost) {
      this.balance -= totalCost;
      if (!this.holdings.includes(stock)) {
        stock.quantity = 0;
        this.holdings.push(stock);
      }
      stock.quantity += quantity;
      return true; // Buy successful
    } else {
      return false; // Insufficient funds
    }
  }

  sellStock(stock, quantity) {
    if (stock.quantity >= quantity) {
      this.balance += stock.price * quantity;
      stock.quantity -= quantity;
      if (stock.quantity === 0) {
        this.holdings = this.holdings.filter((s) => s !== stock);
      }
      return true; // Sell successful
    } else {
      return false; // Insufficient stocks to sell
    }
  }

  calculatePortfolioValue() {
    return this.holdings.reduce((total, stock) => total + stock.price * stock.quantity, 0);
  }
}

let marcedesBenc = new Stock("Marcedes-Benc", 100, 2);
let dmw = new Stock("DMW", 80, 3);
let mykrosofft = new Stock("Mykrosofft", 120, 2.5);
let tassla = new Stock("Tassla", 150, 4);
let amason = new Stock("Amason", 180, 5);
let bojieng = new Stock("Bojieng", 90, 2.2);

let stocks = [marcedesBenc, dmw, mykrosofft, tassla, amason, bojieng];
let user;

let buyButtons = [];
let sellButtons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  user = new User();

  // Set interval for stock price updates (every day)
  setInterval(updateStockPrices, 1000); // 1000 milliseconds = 1 second

  // Initialize buttons
  for (let i = 0; i < stocks.length; i++) {
    let rowNum = floor(i / 2);
    let colNum = i % 2;

    let buyButtonX = 20 + colNum * (width / 2 + 20);
    let sellButtonX = 20 + colNum * (width / 2 + 20) + 60 + 5;
    let buttonY = 30 + rowNum * (height / 3) + (height / 3) - 20;

    let buyButton = new Button("Buy", buyButtonX, buttonY, 60, 20, () => buyStockPrompt(stocks[i]));
    let sellButton = new Button("Sell", sellButtonX, buttonY, 60, 20, () => sellStockPrompt(stocks[i]));

    buyButtons.push(buyButton);
    sellButtons.push(sellButton);
  }
}

function draw() {
  background(240); // Lighter background

  // Display stock information and draw graphs with 2 stocks on each row
  let numRows = 3;
  let numCols = 2;
  let xOffset = 20;
  let yOffset = 30;

  let cellWidth = (width - (numCols + 1) * xOffset) / numCols;
  let cellHeight = (height - yOffset) / numRows;

  for (let i = 0; i < stocks.length; i++) {
    let rowNum = floor(i / numCols);
    let colNum = i % numCols;

    let stock = stocks[i];

    // Display stock information
    textSize(14); // Smaller text size
    fill(50); // Darker text color
    text(`${stock.name} Price: $${stock.price.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset + rowNum * cellHeight + 15);

    // Display user balance
    text(`User Balance: $${user.balance.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset - 10);

    // Draw stock price graph
    stock.drawGraph(
      xOffset + colNum * (cellWidth + xOffset),
      yOffset + 20 + rowNum * cellHeight,
      cellWidth,
      cellHeight - 20
    );

    // Draw Buy and Sell buttons
    buyButtons[i].display();
    sellButtons[i].display();
  }

  // Display user's current holdings and portfolio value
  textSize(16);
  fill(50); // Darker text color
  text("Portfolio:", xOffset, height - 60);
  for (let i = 0; i < user.holdings.length; i++) {
    let holding = user.holdings[i];
    text(`${holding.name}: ${holding.quantity} stocks - Value: $${(holding.price * holding.quantity).toFixed(2)}`, xOffset, height - 30 - i * 30);
  }
  text(`Total Portfolio Value: $${user.calculatePortfolioValue().toFixed(2)}`, xOffset, height - 10);
}

function mouseClicked() {
  // Check if Buy or Sell button is clicked
  for (let i = 0; i < stocks.length; i++) {
    if (buyButtons[i].isClicked(mouseX, mouseY)) {
      buyButtons[i].onClick();
    }

    if (sellButtons[i].isClicked(mouseX, mouseY)) {
      sellButtons[i].onClick();
    }
  }
}

function updateStockPrices() {
  // Update prices for all stocks
  for (let stock of stocks) {
    stock.updatePrice();
  }
}

function buyStockPrompt(stock) {
  let quantity = prompt(`Enter the quantity of ${stock.name} stocks you want to buy:`);
  quantity = parseInt(quantity);
  if (!isNaN(quantity) && quantity > 0) {
    user.buyStock(stock, quantity);
  }
}

function sellStockPrompt(stock) {
  let quantity = prompt(`Enter the quantity of ${stock.name} stocks you want to sell:`);
  quantity = parseInt(quantity);
  if (!isNaN(quantity) && quantity > 0) {
    user.sellStock(stock, quantity);
  }
}

