let questions = [

    {
        question: "Which language runs in a web browser?",

        answers: [
            "Python",
            "JavaScript",
            "C++",
            "Java"
        ],

        correct: "JavaScript"
    },


    {
        question: "What does DOM stand for?",

        answers: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Method",
            "Digital Object Management"
        ],

        correct: "Document Object Model"
    },


    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        answers: [
            "variable",
            "let",
            "define",
            "varname"
        ],

        correct: "let"
    },


    {
        question: "Which method selects an HTML element using its ID?",

        answers: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "findId()"
        ],

        correct: "getElementById()"
    },


    {
        question: "Which method is used to create a new HTML element?",

        answers: [
            "newElement()",
            "createElement()",
            "makeElement()",
            "addElement()"
        ],

        correct: "createElement()"
    }

];



// Stores the index of the current question

let currentQuestionIndex = 0;


// Stores the student's score

let score = 0;


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

let questionElement =
    document.getElementById("question");


let questionNumberElement =
    document.getElementById("question-number");


let answerContainer =
    document.getElementById("answer-container");


let feedbackElement =
    document.getElementById("feedback");


let nextButton =
    document.getElementById("next-btn");


let restartButton =
    document.getElementById("restart-btn");


let scoreElement =
    document.getElementById("score");


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    // Get the current question

    let currentQuestion =
        questions[currentQuestionIndex];


    // Display question number

    questionNumberElement.textContent =
        "Question " +
        (currentQuestionIndex + 1) +
        " of " +
        questions.length;


    // Display question

    questionElement.textContent =
        currentQuestion.question;


    // Clear previous answer buttons

    answerContainer.innerHTML = "";


    // Clear previous feedback

    feedbackElement.textContent = "";


    // ======================================
    // CREATE ANSWER BUTTONS
    // ======================================

    for (let answer of currentQuestion.answers) {

        // Create a button

        let button =
            document.createElement("button");


        // Put answer text inside button

        button.textContent = answer;


        // Add CSS class

        button.classList.add("answer-btn");


        // ==================================
        // ADD CLICK EVENT
        // ==================================

        button.addEventListener("click", function() {

            // Check the selected answer

            checkAnswer(answer);


            // Select all answer buttons

            let allButtons =
                document.querySelectorAll(".answer-btn");


            // Disable all buttons

            for (let btn of allButtons) {

                btn.disabled = true;

            }


            // Check whether the answer is correct

            if (answer === currentQuestion.correct) {

                button.classList.add("correct");

            }

            else {

                button.classList.add("wrong");


                // Find the correct answer button

                for (let btn of allButtons) {

                    if (btn.textContent === currentQuestion.correct) {

                        btn.classList.add("correct");

                    }

                }

            }

        });


        // Add button to the page

        answerContainer.appendChild(button);

    }

}


// ==========================================
// CHECK ANSWER
// ==========================================

function checkAnswer(selectedAnswer) {

    // Get current question

    let currentQuestion =
        questions[currentQuestionIndex];


    // Compare selected answer with correct answer

    if (selectedAnswer === currentQuestion.correct) {

        // Increase score

        score++;


        // Display feedback

        feedbackElement.textContent =
            "Correct! 🎉";

    }

    else {

        feedbackElement.textContent =
            "Wrong answer!";

    }


    // Update score on webpage

    scoreElement.textContent =
        "Score: " + score;

}


// ==========================================
// NEXT QUESTION
// ==========================================

nextButton.addEventListener("click", function() {

    // Move to next question

    currentQuestionIndex++;


    // Check whether more questions remain

    if (currentQuestionIndex < questions.length) {

        showQuestion();

    }

    else {

        // Quiz is finished

        showResult();

    }

});


// ==========================================
// SHOW FINAL RESULT
// ==========================================

function showResult() {

    // Change question heading

    questionElement.textContent =
        "Quiz Completed! 🎉";


    // Remove answer buttons

    answerContainer.innerHTML = "";


    // Display final score

    feedbackElement.textContent =
        "Your final score is " +
        score +
        " out of " +
        questions.length;


    // Hide next button

    nextButton.style.display =
        "none";


    // Show restart button

    restartButton.style.display =
        "inline-block";


    // Hide question number

    questionNumberElement.textContent =
        "";
}


// ==========================================
// RESTART QUIZ
// ==========================================

restartButton.addEventListener("click", function() {

    // Reset question index

    currentQuestionIndex = 0;


    // Reset score

    score = 0;


    // Update score

    scoreElement.textContent =
        "Score: 0";


    // Show next button

    nextButton.style.display =
        "inline-block";


    // Hide restart button

    restartButton.style.display =
        "none";


    // Show first question

    showQuestion();

});


// ==========================================
// START QUIZ
// ==========================================

showQuestion();