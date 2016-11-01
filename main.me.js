console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var first;
var second;

if (first===cardOne && second===cardTwo){
	alert("You Found a Match!");
} else if (first===cardTwo && second===cardOne){
	alert("You Found a Match!");
} else if (first===cardThree && second===cardFour){
	alert("You Found a Match!");
} else if (first===cardFour && second===cardThree){
	alert("You Found a Match!");
} else {
	alert("Sorry, keep trying!")
}