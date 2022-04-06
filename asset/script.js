// create question
var question = document.getElementById('question-prop');
var startButton = document.getElementById('start-btn');
var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');
var secondLt = 10;
var  timerEl = document.getElementById('timerId')
var answers =0;
var currentQuestionindex = 0;


startButton.addEventListener('click', startGame);



function startGame () {
    timer()
    showQuestion ()
    showAnswer ()

}


// / create timer
function timer() {
    setInterval(function() {
        secondLt--;
        if(secondLt>=0) {
            timerEl.textContent = secondLt;
        }
    }, 1000);

    }
    
    
    function showQuestion () {
        // localStorage.setitem('question',JSON.stringify(questions));
        var currentQuestion = questions[currentQuestionindex];
        var questionElement = document.getElementById('question-prop');
        questionElement.textContent = currentQuestion.question;

    }


    function showAnswer () {
        var currentQuestion = questions[currentQuestionindex];
        btn1.textContent = currentQuestion.answers[0].a;
        btn2.textContent = currentQuestion.answers[0].b;
        btn3.textContent = currentQuestion.answers[0].c;
        btn4.textContent = currentQuestion.answers[0].d;
        
    }

        
var questions = [
    {
        question:'What does "js stand for?',
        answers:[
            {a:'jacks stupid',correct:'false'},
            {b:'javascript',corrct:'true'},
            {c:'james scoot',correct:false},
            {d:'black jack',correct:'false'}
        ]
    },

    {
        question:'What does css stand for?',
        answers:[
            {1:'cool,sexy, and slick',correct:'false'},
            {2:'cascading style sheet',correct:'true'},
            {3:'cool mo dee',correct:'false'},
            {4:'my head hurts',correct:'false'}
        ]
    }
]



