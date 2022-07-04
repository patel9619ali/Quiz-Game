const quizQuestion = 
[
    {
      "question" : "Which of the following is correct about JavaScript?",
      "answer1" : "JavaScript is a lightweight, interpreted programming language." , 
      "answer2" : "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
      "answer3" : "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers." ,
      "answer4" : "All of the above." ,
      "ans": 'answer4',
    },
    {
        "question" : `Which of the following is the correct syntax to redirect a url using JavaScript?`,
        "answer1" : "document.location='http://www.newlocation.com';" , 
        "answer2" : "browser.location='http://www.newlocation.com';" , 
        "answer3" : "navigator.location='http://www.newlocation.com';" ,
        "answer4" : "window.location='http://www.newlocation.com';" , 
        "ans": 'answer4',
    },
    {
        "question" : "Which built-in method calls a function for each element in the array?",
        "answer1" : "while()" , 
        "answer2" : "loop()" , 
        "answer3" : "forEach()" ,
        "answer4" : "None of the above." , 
        "ans": 'answer3',
    },
    {
        "question" : "Which built-in method returns the characters in a string beginning at the specified location?",
        "answer1" : "substr()" , 
        "answer2" : "getSubstring()" , 
        "answer3" : "slice()" ,
        "answer4" : "None of the above." ,
        "ans": 'answer1', 
    },
    {
        "question" : "Which of the following function of String object combines the text of two strings and returns a new string?",
        "answer1" : "add()" , 
        "answer2" : "merge()" , 
        "answer3" : "concat()" ,
        "answer4" : "append()" ,
        "ans": 'answer3', 
    },
    {
        "question" : "Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        "answer1" : "concat()" , 
        "answer2" : "match()" , 
        "answer3" : "replace()" ,
        "answer4" : "search()" ,
        "ans": 'answer4', 
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
let progressBar = document.getElementById("progress_bar_inner");
let questionCount = 0;
let scoreCard = 0; 
let counter = 15;

startButton.addEventListener("click" , startButtonfunc)
function startButtonfunc(){
    startButton.classList.add('hide');
    quizWrapper.classList.remove('hide');
    question();
}
function question() {
    allQuestion.innerText = quizQuestion[questionCount].question;
    options();
};
function options() {
    optionFirst.innerText = quizQuestion[questionCount].answer1;
    optionSecond.innerText = quizQuestion[questionCount].answer2;
    optionThird.innerText = quizQuestion[questionCount].answer3;
    optionForth.innerText = quizQuestion[questionCount].answer4;
    startTimer();
    nextButton.addEventListener("click" , getAnswer);
}
function startTimer() {
   interval =  setInterval(timer, 1000);  
    function timer(){
        stopWatch.innerHTML = counter;
        counter--;
        let progressWidth = counter/16 * 100;
        counter > -1 ? progressBar.style.width = progressWidth + "%" : stopWatch.innerHTML = "Time Up";
        if (counter < 3) {
            stopWatch.style.color = "red";
            progressBar.style.backgroundColor = "red";
        }
        else{
            stopWatch.style.color = "green";
            progressBar.style.backgroundColor = "green";
        }
    }
}
            
    
function getAnswer(){
    let store_answer =  checkAnswer();
        if (store_answer === quizQuestion[questionCount].ans && counter > 0) {
        scoreCard++;
        console.log(scoreCard);
    }
    clearInterval(interval);
    counter = 15;
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