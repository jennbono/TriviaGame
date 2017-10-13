function(){
	var questions = [{
		question: "What was the 1988 Championship team named?",
		choices: ["Danny and Co.", "The Miracles", "Danny and the Miracles", "Manning's Miracles"],
		correctAnswer: 2
	}, {
		question: "What year did Allen Fieldhouse open?",
		choices: ["1954", "1955", "1956", "1957"],
		correctAnswer: 1
	}, {
		question: "Which head coach is the only coach with a losing record?",
		choices: ["James Naismith", "Ted Owens", "Phog Allen", "Dick Harp"],
		correctAnswer: 0
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
		choices: ["14", "13", "12", "11",]
		correctAnswer: 1
	}];
}










//create onclick event for start button
// $(".start-game").click(function() {

// })

//have one question come up at a time
//have 20 second timer running
setTimeout(twentySeconds)
	20000;

function twentySeconds();
//if timer === 0, correct answer will display for 5 seconds, then go to next question
//create onclick event for each answer
//each answer has a if/else 
//display answer for 5 seconds
//display picture for 5 seconds
//automatically go on to next question after 5 seconds is up

//at end of questions- total number of questions correct, incorrect and unanswered are displayed
//create onclick event for start again button that goes to question 1