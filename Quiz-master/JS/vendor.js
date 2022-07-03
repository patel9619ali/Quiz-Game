const quizQuestion = 
[
    {
      "question" : "Inside which HTML element do we put the JavaScript?",
      "answer1" : "script tag" , 
      "answer2" : "js tag",
      "answer3" : "javascript tag" ,
      "answer4" : "scripting tag" ,
      "ans": 'answer1',
    },
    {
        "question" : `What is the correct JavaScript syntax to change the content of the HTML element below?p id="demo">This is a demonstration.</p>`,
        "answer1" : 5 , 
        "answer2" : 5 , 
        "answer3" : 6 ,
        "answer4" : 8 , 
        "ans": 'answer3',
    },
    {
        "question" : "What is 6 + 2?",
        "answer1" : 5 , 
        "answer2" : 8 , 
        "answer3" : 5 ,
        "answer4" : 6 , 
        "ans": 'answer2',
    },
    {
        "question" : "What is 8 + 2?",
        "answer1" : 5 , 
        "answer2" : 5 , 
        "answer3" : 10 ,
        "answer4" : 8 ,
        "ans": 'answer3', 
    },
]
let startButton = document.getElementById("start_btn");
let quizWrapper = document.getElementById("quiz_wrapper");
let allQuestion = document.getElementById("question_match");
let optionFirst = document.getElementById("option1");
let optionSecond = document.getElementById("option2");
let optionThird = document.getElementById("option3");
let optionForth = document.getElementById("option4");
let nextButton = document.getElementById("next_btn");
let answerButton = document.querySelectorAll('.answer');
let selectScoreCard = document.getElementById("score_card");
let actualScore = document.getElementById("actual_score");
let outOfScore = document.getElementById("out_of_score");
let stopWatch = document.getElementById("stop_watch");
let questionCount = 0;
let scoreCard = 0; 
let counter = 0;

startButton.addEventListener("click" , startButtonfunc)
function startButtonfunc(){
    startButton.classList.add('hide');
    quizWrapper.classList.remove('hide');
    question();
}
function question() {
    allQuestion.innerHTML = quizQuestion[questionCount].question;
    options();
};
function options() {
    optionFirst.innerHTML = quizQuestion[questionCount].answer1;
    optionSecond.innerHTML = quizQuestion[questionCount].answer2;
    optionThird.innerHTML = quizQuestion[questionCount].answer3;
    optionForth.innerHTML = quizQuestion[questionCount].answer4;
    startTimer();
    nextButton.addEventListener("click" , getAnswer);
    
}
function startTimer() {
   interval =  setInterval(timer, 1000);  
    function timer(){
        stopWatch.innerHTML = counter;
        counter++;
    }
}
            
    
function getAnswer(){
    let store_answer =  checkAnswer();
        if (store_answer === quizQuestion[questionCount].ans && counter < 6) {
        scoreCard++;
        console.log(scoreCard);
    }
    clearInterval(interval);
    counter = 0;
    actualScore.innerHTML = scoreCard;
    outOfScore.innerHTML = quizQuestion.length;
    questionCount++; 
    if(questionCount < quizQuestion.length){
        question();
    }
    else{
        selectScoreCard.classList.remove("d-none");
        selectScoreCard.classList.add("d-block");
        quizWrapper.classList.add("d-none");
        if (scoreCard >= 2) {
        let happyEmoji = document.getElementById("happy-emoji");
        happyEmoji.style.display = "block";
        }
        else{
            let sadEmoji = document.getElementById("sad-emoji");
            sadEmoji.style.display = "block";
        }
    }
}
function checkAnswer(){
    let answer;
    answerButton.forEach(function (allAnswerButtonCheck){
        if(allAnswerButtonCheck.checked){
            answer = allAnswerButtonCheck.id;
        }  
    })
    return answer;
}