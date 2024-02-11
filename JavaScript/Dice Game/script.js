// Player 1 dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // random number --> 0 to 0.9999...

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6.png

var randomImageSource = "image/" + randomDiceImage; // image/dice1.png - image/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Player 2 dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // random number --> 0 to 0.9999...

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1-dice6.png

var randomImageSource = "image/" + randomDiceImage; // image/dice1.png - image/dice6.png

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomImageSource);
