// create question
var question = document.getElementById('question-prop');
var startButton = document.getElementById('start-btn');
var btn1 = document.getElementById('button-1');
var btn2 = document.getElementById('button-2');
var btn3 = document.getElementById('button-3');
var btn4 = document.getElementById('button-4');
var secondLt = 0;
var timerEl = 10;
var timerId = document.getElementById('timerId')




startButton.addEventListener('click',function(event){
    event.preventDefault();
    startGame();
});



function startGame () {
console.log('started');
}

function timer() {
    timerEl= setInterval(secondLt--,1000);
    timerEl.textcontext = secondLt
    if(secondLt == 0){
        clearInterval(interval)
    }

        
    }
