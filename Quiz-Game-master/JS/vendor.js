const quizQuestion = 
[
    {
      "question" : "What is 2 * 2?",
      "answer1" : 4 , 
      "answer2" : 5 ,
      "answer3" : 6 ,
      "answer4" : 8 ,
      "ans": 'answer1',
    },
    {
        "question" : "What is 4 + 2?",
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
let questionCount = 0;
let scoreCard = 0; 
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
    nextButton.addEventListener("click" , getAnswer);
}
function getAnswer(){
    let store_answer =  checkAnswer();
    if (store_answer === quizQuestion[questionCount].ans) {
        scoreCard++;
        actualScore.innerHTML = scoreCard;
        out_of_score.innerHTML = quizQuestion.length;
    }
    questionCount++; 
    if(questionCount < quizQuestion.length){
        question();
    }
    else{
        score_card.classList.remove("d-none");
        score_card.classList.add("d-block");
        quizWrapper.classList.add("d-none");
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