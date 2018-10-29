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
var correctAnswer = 0;

$('#questions').html(parseInt(currentQuestion) + 1 + ". " + triviaQuestions[currentQuestion].question);
var options = triviaQuestions[currentQuestion].choices;
var formHtml = " ";
for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      triviaQuestions[currentQuestion].choices[i] + '</label></div>';
}

$('#answer-choices').html(formHtml);
$("#option0").prop('checked', true);
console.log(options);


