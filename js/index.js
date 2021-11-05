var myQuestions = [
	{
		question: "1) Quanto é 5+3",
		answers: {
			a: '9',
			b: '8',
			c: '3'
		},
		correctAnswer: 'b'
	},
	{
		question: "2) Qual é o maior numero?",
		answers: {
			a: '-30',
			b: '5',
			c: '10',
			d: '9'
		},
		correctAnswer: 'c'
	},
	{
		question: "3) De quem é a famosa frase “Penso, logo existo”?",
		answers: {
			a: 'Platão',
			b: 'Galileu Galilei',
			c: 'Descartes',
			d: 'Sócrates'
		},
		correctAnswer: 'c'
	},	
	{
			question: "4) De onde é a invenção do chuveiro elétrico?",
			answers: {
				a: 'França',
				b: 'Itália',
				c: 'Brasil',
				d: 'Inglaterra'
			},
			correctAnswer: 'c'
	},
	{
			question: "5) Quais o menor e o maior país do mundo?",
			answers: {
				a: 'Vaticano e Rússia',
				b: 'Nauru e China',
				c: 'Mônaco e Canadá',
				d: 'Malta e Estados Unidos'
			},
			correctAnswer: 'a'
	},
	{
			question: "6) Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
			answers: {
				a: 'Jânio Quadros',
				b: 'Jacinto Anjos',
				c: 'Getúlio Vargas',
				d: 'João Goulart'
			},
			correctAnswer: 'd'
	},
	{
		question: "7) Quantas casas decimais tem o número pi?",
		answers: {
			a: 'Duas',
			b: 'Centenas',
			c: 'Infinitas',
			d: 'Milhares'
		},
		correctAnswer: 'c'
	},
	{
		question: "8) Atualmente, quantos elementos químicos a tabela periódica possui?",
		answers: {
			a: '118',
			b: '92',
			c: '113',
			d: '109'
		},
		correctAnswer: 'a'
	},
	{
		question: "9) O que a palavra legend significa em português?",
		answers: {
			a: 'Conto',
			b: 'Lenda',
			c: 'Legendário',
			d: 'Legenda'
		},
		correctAnswer: 'b'
	},
	{
		question: "10) Quais as duas datas que são comemoradas em novembro?",
		answers: {
			a: 'Dia do Médico e Dia de São Lucas',
			b: 'Black Friday e Dia da Árvore',
			c: 'Proclamação da República e Dia Nacional da Consciência Negra',
			d: 'Independência do Brasil e Dia da Bandeira'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
