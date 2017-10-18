var currentQuestion = 0;
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
	image: "assets/images/danny.png",
	answer: "Danny and the Miracles"
}, {
	question: "What year did Allen Fieldhouse open?",
	choices: ["1954", "1955", "1956", "1957"],
	correctAnswer: 1,
	image: "assets/images/allen-fieldhouse.png",
	answer: "1955"
}, {
	question: "Which head coach is the only coach with a losing record?",
	choices: ["James Naismith", "Ted Owens", "Phog Allen", "Dick Harp"],
	correctAnswer: 0,
	image: "assets/images/naismith.png",
	answer: "James Naismith"
}, {
	question: "Which nickname did Wilt Chamberlain prefer?",
	choices: ["Wilt the Stilt", "Goliath", "Ursa Major", "Big Dipper"],
	correctAnswer: 3,
	image: "assets/images/wilt.png",
	answer: "Big Dipper"
}, {
	question: "What was the final score of the 2008 National Championship game?",
	choices: ["71-65 OT", "70-65 OT", "75-67 OT", "75-68 OT"],
	correctAnswer: 3,
	image: "assets/images/2008-champ.png",
	answer: "75-68 OT"
}, {
	question: "In 1966, who was called for stepping on the sidelines during a would-be game winning shot versus Texas Western?",
	choices: ["Walt Wesley", "Al Lopes", "Jo Jo White", "Ron Franz"],
	correctAnswer: 2,
	image: "assets/images/jojo-white.png",
	answer: "Jo Jo White"
}, {
	question: "In the final Border War at Allen Fieldhouse, who blocked Phil Pressey's shot to send the game into overtime?",
	choices: ["Thomas Robinson", "Jamari Taylor", "Kevin Young", "Jeff Withey"],
	correctAnswer: 0,
	image: "assets/images/trob-block.gif",
	answer: "Thomas Robinson"
}, {
	question: "How many consecutive regular season Big 12 titles have the Jayhawks won, tying them with UCLA?",
	choices: ["14", "13", "12", "11"],
	correctAnswer: 1,
	image: "assets/images/thirteen.png",
	answer: "13"
}, {
	question: "Who was the coach in the only season Kansas went undefeated in Big 12 play?",
	choices: ["Larry Brown", "Ted Owens", "Bill Self", "Roy Williams"],
	correctAnswer: 3,
	image: "assets/images/williams.png",
	answer: "Roy Williams"

}, {
	question: "Who did the Jayhawks defeat to claim their 2,000th victory in program history?",
	choices: ["Texas Tech", "Texas", "Texas A&M", "TCU"],
	correctAnswer: 0,
	image: "assets/images/2k-shirts.png",
	answer: "Texas Tech"
}];

var StartGame = $('<button type="button" class="btn btn-primary btn-lg start-game">Start Game</button>')

$(".game").append(StartGame);

//function for in question mode
function displayQuestion (index) {
	clearTimeout(timer);
	$(".game").empty();
	if(currentQuestion > 9) {
		displayEndOfGame();
		return;
	}
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
	timerUpdate = setInterval(function() {getTimeLeft(); }, 1000);

}

function displayAnswer (index,button) {
	clearTimeout(timer);
	clearInterval(timerUpdate);
	$(".game").empty();
	var answerHeader = $('<h1></h1>');
		//each answer has a if/else 
		if ($(button).attr("id") === "choice" + questions[index].correctAnswer) {
			answerHeader.html("Correct!");
			correctAnswers++;
		}
		else if (button == null){
			answerHeader.html("Out of Time!");
			unansweredQuestions++;
		}
		else {
			answerHeader.html("Incorrect!");
			incorrectAnswers++;
		}
	$(".game").append(answerHeader);
	//display answer
	answerAnswer = $('<div id="answers">' + questions[index].answer + '</div>');
	$(".game").append(answerAnswer);
	//display picture
	var answerImage = $('<img class="images" src="'+ questions[index].image +'">'); 
	$(".game").append(answerImage);
	//automatically go on to next question after 5 seconds is up
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

//at end of questions- total number of questions correct, incorrect and unanswered are displayed
function displayEndOfGame() {
	clearTimeout(timer);
	clearInterval(timerUpdate);
	$(".game").empty();
	// total number of questions correct
	var correctQuestions = $('<div>')
		.attr('id', 'correctAnswers')
		.append('Correct Answers: ')
		.append(correctAnswers);
		$(".game").append(correctQuestions);
	// total number of questions incorrect
	incorrectQuestions = $('<div>')
		.attr('id', 'incorrectAnswers')
		.append('Incorrect Answers: ')
		.append(incorrectAnswers);
		$(".game").append(incorrectQuestions);
	// total number of unanswered questions
	unansweredAnswers = $('<div>')
		.attr('id', 'unansweredQuestions')
		.append('Unanswered Questions: ')
		.append(unansweredQuestions);
		$(".game").append(unansweredAnswers);
	
}












//create onclick event for start again button that goes to question 1