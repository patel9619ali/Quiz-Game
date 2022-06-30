let startButton = document.getElementById("start_btn");
let quizWrapper = document.getElementById("quiz_wrapper");
let allQuestion = document.getElementById("question_match");
let optionFirst = document.getElementById("option1");
let optionSecond = document.getElementById("option2");
let optionThird = document.getElementById("option3");
let optionForth = document.getElementById("option4");
let nextButton = document.getElementById("next_btn");
let answerButton = document.querySelectorAll('.answer');

startButton.addEventListener("click" , startButtonfunc)

function startButtonfunc(){
    startButton.classList.add('hide');
    quizWrapper.classList.remove('hide');
    question();
}

function question() {
    let questionCount = 0;
    let questionList = quizQuestion[questionCount];
    allQuestion.innerHTML = questionList.question;
    options();
};

function options() {
    optionFirst.innerHTML = quizQuestion[0].answer1;
    optionSecond.innerHTML = quizQuestion[0].answer2;
    optionThird.innerHTML = quizQuestion[0].answer3;
    optionForth.innerHTML = quizQuestion[0].answer4;
    nextButton.addEventListener("click" , getAnswer);
}

function getAnswer(){
    let abc =  checkAnswer();
    console.log(abc);
}
function checkAnswer(){
    let answer;
    answerButton.forEach(function (allAnswerButtonCheck){
       
        if(allAnswerButtonCheck.checked){
            answer = allAnswerButtonCheck.id;
            console.log(answer);
        }  
    })
    return answer;
    
}


const quizQuestion = 
[
    {
      "question" : "What is 2 * 2?",
      "answer1" : 4 , "iscorrect" : true,
      "answer2" : 5 , "iscorrect" : false,
      "answer3" : 6 , "iscorrect" : false,
      "answer4" : 8 , "iscorrect" : false,
    },
    {
        "question" : "What is 4 + 2?",
        "answer1" : 5 , "iscorrect" : false,
        "answer2" : 5 , "iscorrect" : false,
        "answer3" : 6 , "iscorrect" : true,
        "answer4" : 8 , "iscorrect" : false,
    },
    {
        "question" : "What is 6 + 2?",
        "answer1" : 5 , "iscorrect" : false,
        "answer2" : 3 , "iscorrect" : false,
        "answer3" : 8 , "iscorrect" : true,
        "answer4" : 6 , "iscorrect" : false,
    },
    {
        "question" : "What is 6 + 2?",
        "answer1" : 5 , "iscorrect" : false,
        "answer2" : 5 , "iscorrect" : false,
        "answer3" : 10 , "iscorrect" : true,
        "answer4" : 8 , "iscorrect" : false,
    },
] 
// {
//     question : "What is 2 * 2?",
//     answer1 : 4 , iscorrect : true,
//     answer2 : 5 , iscorrect : false,
//     answer3 : 6 , iscorrect : false,
//     answer4 : 8 , iscorrect : false,
// }




