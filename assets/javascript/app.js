var currentQuestion = 0;
var gameState = 0; //0=displaying question 1=displaying answer
var timer;
var timerUpdate;
var secondsRemaining = 20;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var currentImage = 0;


var questions = [{
	question: "What was the 1988 Championship team nicknamed?",
	choices: ["Danny and Co.", "The Miracles", "Danny and the Miracles", "Manning's Miracles"],
	correctAnswer: 2,
	image: "assets/images/danny-miracles.png"
}, {
	question: "What year did Allen Fieldhouse open?",
	choices: ["1954", "1955", "1956", "1957"],
	correctAnswer: 1,
	image: "assets/images/allen-fieldhouse.png"
}, {
	question: "Which head coach is the only coach with a losing record?",
	choices: ["James Naismith", "Ted Owens", "Phog Allen", "Dick Harp"],
	correctAnswer: 0,
	image: "assets/images/naismith.png"
}, {
	question: "Which nickname did Wilt Chamberlain prefer?",
	choices: ["Wilt the Stilt", "Goliath", "Ursa Major", "Big Dipper"],
	correctAnswer: 3
}, {
	question: "What was the final score of the 2008 National Championship game?",
	choices: ["70-65", "70-65 OT", "75-68", "75-68 OT"],
	correctAnswer: 3
}, {
	question: "In 1966, who was called for stepping on the sidelines during a would-be game winning shot versus Texas Western?",
	choices: ["Walt Wesley", "Al Lopes", "Jo Jo White", "Ron Franz"],
	correctAnswer: 2
}, {
	question: "In the final Border War at Allen Fieldhouse, who blocked Phil Pressey's shot to send the game into overtime?",
	choices: ["Thomas Robinson", "Jamari Taylor", "Kevin Young", "Jeff Withey"],
	correctAnswer: 0
}, {
	question: "How many consecutive regular season Big 12 titles have the Jayhawks won, tying them with UCLA?",
	choices: ["14", "13", "12", "11"],
	correctAnswer: 1
}, {
	question: "Who was the coach in the only season Kansas went undefeated in Big 12 play?",
	choices: ["Larry Brown", "Ted Owens", "Bill Self", "Roy Williams"],
	correctAnswer: 3
}, {
	question: "Who did the Jayhawks defeat to claim their 2,000th victory in program history?",
	choices: ["Texas Tech", "Texas", "Texas A&M", "TCU"],
	correctAnswer: 0
}];

var images = [
			  ,
			  ,
			  "assets/images/wilt.png",
			  "assets/images/2008-champ.png",
			  "assets/images/jojo-white.png",
			  "assets/images/trob.png",
			  "assets/images/thirteen.png",
			  "assets/images/williams.png",
			  "assets/images/2000-wins.png"];

var StartGame = $('<button type="button" class="btn btn-primary btn-lg start-game">Start Game</button>')

$(".game").append(StartGame);

//function for in question mode
function displayQuestion (index) {
	clearTimeout(timer);
	$(".game").empty();
	var questionHeader = $('<h2 class="questonTitle">'+ questions[index].question +'</h2>');
	$(".game").append(questionHeader);
	for (var i = 0; i < questions[index].choices.length; i++) {
		//create onclick event for each answer
		var choiceButton = $('<button type="button" class="btn btn-primary btn-lg btn-color choice" id="choice'+i+'" >'+questions[index].choices[i]+'</button>');
		$(".game").append(choiceButton);
	}
	 //have 20 second timer running
	timer = setTimeout(function(){ displayAnswer(currentQuestion); }, 20000);
	function getTimeLeft() {
		secondsRemaining = secondsRemaining - 1;
    	$("#timeoutElement").html("You have " + secondsRemaining + " seconds remaining")
	}
	var timeoutElement = $("<div id='timeoutElement'>You have 20 seconds remaining</div>");
	secondsRemaining = 20;
	$(".game").append(timeoutElement);
	timerUpdate = setTimeout(function() {getTimeLeft(); }, 1000);

}

function displayAnswer (index,button) {
	clearTimeout(timer);
	clearTimeout(timerUpdate);
	$(".game").empty();
	var answerHeader = $('<h1></h1>');
		//each answer has a if/else 
		if ($(button).attr("id") === "choice" + questions[index].correctAnswer) {
			answerHeader.html("Correct!");
		}
		else {
			answerHeader.html("Incorrect!");
		}
	$(".game").append(answerHeader);
	var answerImage = $('<img src="'+ questions[index].image +'">'); 
	$(".game").append(answerImage);
	currentQuestion = currentQuestion + 1;
	timer = setTimeout(function(){ displayQuestion(currentQuestion); }, 5000);
}


$(document).on('click', ".choice" , function() {
	displayAnswer(currentQuestion,this);

});

//create onclick event for start button
$(".start-game").click(function() {
	//have one question come up at a time
	displayQuestion(currentQuestion);
	

})







//if timer === 0, correct answer will display for 5 seconds, then go to next question


//display answer for 5 seconds
//display picture for 5 seconds
//automatically go on to next question after 5 seconds is up

//at end of questions- total number of questions correct, incorrect and unanswered are displayed
//create onclick event for start again button that goes to question 1