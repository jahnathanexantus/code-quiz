// hook up html
const btn_1 = document.getElementById("button-1");
const btn_2 = document.getElementById("button-2");
const btn_3 = document.getElementById("button-3");
const btn_4 = document.getElementById("button-4");
const startBtn = document.getElementById("start-btn");
// const showAnswer = getElementById("correctAnswer");
let currentQues = 0;
let score = 0;
let answerEl = document.getElementById("answer");
let displayQues = document.getElementById("question-prop");
let timerEl = document.getElementById("timerId");
let secondLt = 20;
let wrongRight = document.getElementById("wrong-right");
// create question
var questions = [
	{
		question: 'What does "js stand for?',
		a: "jacks stupid",
		b: "javascript",
		c: "james scoot",
		d: "black jack",
		answer: "javascript",
	},
	{
		question: "what is the language of the internet",
		a: "spanish",
		b: "creol",
		c: "HTML",
		d: "english",
		answer: "HTML",
	},
	{
		question: "What does css stand for?",
		a: "cool,sexy, and slick",
		b: "cascading style sheet",
		c: "cool mo dee",
		d: "cool mo dee",
		answer: "cascading style sheet",
	},
];
var currentAns = questions[currentQues];

// / create timer
function timer() {
	setInterval(function () {
		secondLt--;
		if (secondLt >= 0) {
			timerEl.textContent = secondLt;
		}
		if (secondLt === 0) endQuiz();
	}, 1000);
}

// create functionality for the question to show

function showQuestion(currentQues) {
	console.log(questions[currentQues]);

	displayQues.innerHTML = questions[currentQues].question;
	displayQues.value = questions[currentQues].answer;
	btn_1.innerText = questions[currentQues].a;
	btn_1.value = questions[currentQues].a;
	btn_2.innerText = questions[currentQues].b;
	btn_2.value = questions[currentQues].b;
	btn_3.innerText = questions[currentQues].c;
	btn_3.value = questions[currentQues].c;
	btn_4.innerText = questions[currentQues].d;
	btn_4.value = questions[currentQues].d;
}

const chooseAns = () => {
	btn_1.onclick = (e) => correctAnswer(e);
	btn_2.onclick = (e) => correctAnswer(e);
	btn_3.onclick = (e) => correctAnswer(e);
	btn_4.onclick = (e) => correctAnswer(e);
};

const correctAnswer = (e) => {
	console.log(e.target.value);
	if (e.target.value === questions[currentQues].answer) {
		wrongRight.textContent = "you've chosen correctly";
	} else {
		wrongRight.innerHTML = "wrong answer";
	}
	setTimeout(() => {
		wrongRight.textContent = " ";
	}, 1000);

	if (currentQues == questions.length - 1) {
		endQuiz();
	} else {
		currentQues++;
		showQuestion(currentQues);
	}
	// console.log(questions[currentQues]);
	// showQuestion(currentQues)
};

const endQuiz = () => {
	displayQues.innerHTML = "Game over \nFinal Score: " + secondLt * 6;
	timerEl.style.display = "none";
	answerEl.style.display = "none";
};

const startGmn = () => {
	timer();
	showQuestion(currentQues);
	chooseAns();
};

startBtn.onclick = startGmn;
