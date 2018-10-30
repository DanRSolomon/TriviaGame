// $(document).ready(function() {

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
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            triviaQuestions[currentQuestion].choices[i] + '</label></div>';
    }

    $('#answer-choices').html(formHtml);
    $("#option").prop('checked', true);
    console.log(options);
}

function checkAnswer() {
    if ($("input[name=option]:checked").val() == triviaQuestions[currentQuestion].correct) {
        correctAnswers++;
    };
};

$(document).ready(function () {

    // $(".jumbotron").hide();
    // $('#start-button').click(function() {
    //     $(".jumbotron").fadeIn();
    //     $(this).hide();
    // });

    questionSetup();

    $("#next").click(function () {
        event.preventDefault();
        checkAnswer();
        currentQuestion++;
        if (currentQuestion < triviaQuestions.length) {
            questionSetup();
            if (currentQuestion == triviaQuestions.length - 1) {
                $('#next').html("Submit");
                $('#next').click(function () {
                    $(".jumbotron").hide();
                    $("#result").html("You correctly answered " + correctAnswers + " out of " + currentQuestion + " questions! ").hide();
                    $("#result").fadeIn(1500);
                })
            }
        }
    });
});
// });

// $("#start_button").click(playGame());

