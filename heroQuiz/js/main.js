var questions = [
	{
		question: "Who is richer, Batman or Iron man?",
		answer: "iron man"
	},
	{
		question: "Is Darkseid Marvel or DC?",
		answer: "dc"
	},
	{
		question: "Who is faster, The Flash or Quicksilver?",
		answer: "the flash"
	},
	{
		question: "Who does the Lasso of Truth belong to?",
		answer: "wonder woman"
	},
	{
		question: "Who did Ryan Reynolds play in his latest Marvel movie?",
		answer: "deadpool"
	},
	{
		question: "What comic book character can fire beams of red energy from his eyes?",
		answer: "cyclops"
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function quizResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value.toLowerCase()
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
		if(correct <= 3) {
			document.getElementById('image').setAttribute('src', 'img/batslap.png')
		} else if(correct >= 4) {
			document.getElementById('image').setAttribute('src', 'img/deadpool.png')
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}