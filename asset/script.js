// create question
var question = document.getElementById('question-prop');
var startButton = document.getElementById('start-btn');
var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');
var secondLt = 10;

var  timerEl = document.getElementById('timerId')
var timerInterval;

timerInterval = setInterval(timer, 1000)



startButton.addEventListener('click',function(event){
    event.preventDefault();
    startGame();
    timer()
});



function startGame () {
console.log('started');
startButton.classList.remove('hide')
}
// create timer
function timer() {
    secondLt--;
    timerEl.textContent = secondLt;
    if(secondLt == 0) {
        clearInterval(timerInterval);
    }
    }

        
    
