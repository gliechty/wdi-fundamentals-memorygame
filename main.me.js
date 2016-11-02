console.log("JS file is connected to HTML! Woo!")

var cards =["queen", "queen", "king", "king"]
var cardsInPlay=[];
var board=document.getElementById('game-board');

var createBoard = function (){
	for (i=0, i<4, i+=1);{
		var cardElement = document.createElement('div');
		cardElement.className =('card');
		board.appendChild(cardElement);
	}
}

/*var isMatch =function(cards){
}if (first===cardOne && second===cardTwo){
	alert("You Found a Match!");
} else if (first===cardTwo && second===cardOne){
	alert("You Found a Match!");
} else if (first===cardThree && second===cardFour){
	alert("You Found a Match!");
} else if (first===cardFour && second===cardThree){
	alert("You Found a Match!");
} else {
	alert("Sorry, keep trying!")
}*/