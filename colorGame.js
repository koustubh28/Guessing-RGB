var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  //MODE BUTTONS EVENT LISTENER
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //ADD CLICK LISTENERS TO SQUARES
    squares[i].addEventListener("click", function() {
      //GRAB COLOR OF EACH SQUARES
      var clickedColor = this.style.background;
      //COMPARE COLOR WITH RGB
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again ?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again !";
      }
    });
  }
}

//RESET FUNCTION
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //CHANGE COLORS OF SQUARES
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

//RESET BUTTON FUNCTIONALITY
resetButton.addEventListener("click", function() {
  reset();
});

//FUNCTION TO CHANGE ALL COLORS OF DIV IF CORRECT
function changeColors(color) {
  //LOOP THROUGH ALL SQUARES
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = pickedColor;
  }
}

//FUNCTION TO GENERATE RANDOM NUMBER
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//FUNCTION TO GENERATE RANDOM ARRAY OF COLORS
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    //GET RANDOM COLOR AND PUSH INTO ARRAY
    arr.push(randomColor());
  }
  return arr;
}

//FUNCTION TO GENERATE RANDOM COLOR
function randomColor() {
  var r = Math.floor(Math.random() * 256); //rgb color includes values from 0 - 255
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}