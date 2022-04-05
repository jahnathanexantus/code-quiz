const startButton = document.querySelector('.start-button');
let timeEl =document.getElementById('timer')
var timerId;
var secondsLt = 10;
var interVal;
var wrapper = document.getElementById('wrapper')
interVal = setInterval(clock, 1000);
var currentQues = 0;
var choicesEl = document.getElementById('choices')

function startGame () {
    clock();
    timeEl.textContent = secondsLt
}







function clock () {
    
    console.log();
    timerId = setInterval(secondsLt--,1000)
    // secondsLt--;
    timeEl.textContent = secondsLt
    if(secondsLt == 0) {
    clearInterval(interVal)
    
}
}

const questions =[
    {
        ques:"What does vs stand for?",
        choices: ["virtual sports","visual studios","vision spoon"],
        answer: 2
    },

    {
        ques:"What does js stand for?",
        choices:["jock sport","junkun sport","javascript"],
        answer: 3

    }
];

for(var i = 0; i < questions.length;i++) {
    var ques = questions[i].ques;
    document.write(ques);
    var options = questions[i].ques;
    for (var opt in options) {
        for ( var radios in userChoices) {
            userChoices[radios].value = options[opt];
        }
    }

};
startButton.onclick = startGame

