//Rock, Paper, Scissors JavaScript code

function getRandomInt() {	//Generates a random int between 1 and 3 for the below
	return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
function playGame() {
	///the following happens on click of the button
	var input = document.getElementById("enteredTxt").value;	//Takes the input in the box
	var userSelection = null;					//Selection inputted, will be set later
	var ansAllowed = true;					
	
	//change the input to lowercase and then match to Rock, Paper or Scissors
	if (input.toLowerCase() == "r") {
		userSelection = "Rock";
	} else if (input.toLowerCase() == "p") {
		userSelection = "Paper";
	} else if (input.toLowerCase() == "s") {
		userSelection = "Scissors";
	} else {
		ansAllowed = false;
	}
	
	//checking against allowed inputs, giving an error message if they aren't one of the three allowed letters
	if (ansAllowed == false) {
		document.getElementById("Error").innerHTML = ("Sorry, I didn't understand that. Please use 'r', 's' or 'p' to play.");
		return;
	}
	
	//Get a random int to use between 1 and 3 (defined below)
	var randInt = getRandomInt();
	
	//take the random generated number and turn into an input for the game
	var comp_Response = null;
	
	if (randInt == 1) {
		comp_Response = "Rock";
	} else if (randInt == 2) {
		comp_Response = "Paper";
	} else if (randInt == 3) {
		comp_Response = "Scissors";
	}

	//Show the results of input from user and random choice by computer
	document.getElementById("fromUser").innerHTML = "You threw: " + userSelection;
	document.getElementById("fromComputer").innerHTML = "The computer threw: " + comp_Response;
		
	//outputting
	var result = null;
		
	//result comparision and output
	if (userSelection == comp_Response) {
		 result = "You threw the same as the computer, choose again";
	} else if (userSelection == "Rock" && comp_Response == "Paper") {
		result = "Paper beats Rock, you lose this time";
	} else if (userSelection == "Rock" && comp_Response == "Scissors") {
		result = "Rock beats Scissors, congrats, you win!!";
	} else if (userSelection == "Paper" && comp_Response == "Rock") {
		result = "Paper beats Rock, congrats, you win!!";
	} else if (userSelection == "Paper" && comp_Response == "Scissors") {
		result = "Scissors beats Paper, you lose this time";
	} else if (userSelection == "Scissors" && comp_Response == "Rock") {
		result = "Rock beats Scissors, you lose this time";
	} else if (userSelection == "Scissors" && comp_Response == "Paper") {
		result = "Scissors beat Paper, congrats, you win!!";
	}
	
	//Print the results of above
	document.getElementById("Error").innerHTML = result;
}
