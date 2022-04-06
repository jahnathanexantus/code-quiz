// create question
var question = document.getElementById('question-prop');
var startButton = document.getElementById('start-btn');
var btnOne = document.getElementById('button-1');
var btnTwo= document.getElementById('button-2');
var btnThree = document.getElementById('button-3');
var btnFour = document.getElementById('button-4');
var secondLt = 10;
var  timerEl = document.getElementById('timerId')
var currentQuestionindex = 0;


startButton.addEventListener('click', startGame);
btnOne.addEventListener('click', moveQuestion);
btnTwo.addEventListener('click', moveQuestion);
btnThree.addEventListener('click', moveQuestion);
btnFour.addEventListener('click', moveQuestion);


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
        btnOne.innerHTML = currentQuestion.answers[0].a;
        btnTwo.innerHTML = currentQuestion.answers[1].b;
        btnThree.innerHTML = currentQuestion.answers[2].c;
        btnFour.innerHTML = currentQuestion.answers[3].d;
        }

    function moveQuestion () {
        // currentQuestionindex++;
        showAnswer ()
        showQuestion ()
    
    }

        
var questions = [
    {
        question:'What does "js stand for?',
        answers:[
            {a:'jacks stupid',correct:'false'},
            {b:'javascript',corrct:'true'},
            {c:'james scoot',correct:'false'},
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



