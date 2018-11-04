
var triviaQuestions = [{
    question: "What's the name of the closest planet to the Sun?",
    choices: ["Earth", "Mercury", "Jupiter", "Venus"],
    correct: 1
}, {
    question: "How many moons does Mars have?",
    choices: ["One", "Two", "Three", "None"],
    correct: 1
}, {
    question: "Which planet is the largest in the Solar System?",
    choices: ["Neptune", "Saturn", "Jupiter", "Earth"],
    correct: 2
}, {
    question: "Which planet rotates in the opposite direction as the rest?",
    choices: ["Earth", "Mercury", "Jupiter", "Venus"],
    correct: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;

function questionSetup() {

    $('#questions').html(parseInt(currentQuestion) + 1 + ". " + triviaQuestions[currentQuestion].question);
    var options = triviaQuestions[currentQuestion].choices;
    var formHtml = " ";
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '">\
            <label for="option' + i + '">' + triviaQuestions[currentQuestion].choices[i] + '</label></div>';
    }

    $('#answer-choices').html(formHtml);
    $("#option").prop('checked', true);
    console.log(options);


}

// This timer works on its own, but I could not get it to work with my 
//  as its written. I ran out of time to rework it. I know that the code 
//  in the "next" button function is too nested, but again, I couldn't
//  fix it in time. 

// var timeLeft = 15;
// var timerId = setInterval(countdown, 1000);
// function countdown() {
//     if (timeLeft == 0) {
//         clearTimeout(timerId);
//         checkAnswer();
//     } else {
//         $("#timer").html(timeLeft + ' seconds remaining');
//         timeLeft--;
//     }


function checkAnswer() {
    var answerValue = triviaQuestions[currentQuestion].correct
    if ($("input[name=option]:checked").val() == answerValue) {
        correctAnswers++;
        $("#next").hide();
        $("#solution-text").fadeIn(200);
        $("#solution-text").html("Correct! Good Job!");

    } else {
        $("#next").hide();
        $("#solution-text").fadeIn(200);
        $("#solution-text").html("Sorry, the correct answer was " + triviaQuestions[currentQuestion].choices[answerValue] + ".");
    }
}

$(document).ready(function () {
    $(".jumbotron").hide();

    $("#start_button").click(function () {
        $(".jumbotron").fadeIn();
        $("#start_button").hide();
    })

    // next
    //   checkAnswer
    //   answerPause
    //   questionSetup
    questionSetup();


    $("#next").click(function () {
        event.preventDefault();
        checkAnswer();
        setTimeout(answerPause, 1000 * 3);
        function answerPause() {
            $("#solution-text").hide();
            $("#next").fadeIn(200);
            currentQuestion++;
            if (currentQuestion < triviaQuestions.length) {
                questionSetup();
                if (currentQuestion == triviaQuestions.length - 1) {
                    $('#next').html("Submit");
                    $('#next').click(function () {
                        checkAnswer();
                        setTimeout(finalAnwerPause, 1000 * 3);
                        function finalAnwerPause() {
                            $(".jumbotron").hide();
                            $("#result").html("You correctly answered " + correctAnswers + " out of " + currentQuestion + " questions! ").hide();
                            $("#result").fadeIn(1500);

                        }
                    })
                }
            }
        }
    })

});