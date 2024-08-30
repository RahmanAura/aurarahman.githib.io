const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "What is Aura Rahman's current academic status?",
        answers: {
          a: "Master's student at Charles Sturt University",
          b: "Postdoctoral researcher at Charles Sturt University",
          c: "PhD student at Charles Sturt University",
          d: "Undergraduate student at Charles Sturt University"
        },
        correctAnswer: "c"
      },
      {
        question: "In which field is Aura Rahman conducting research?",
        answers: {
          a: "Bioinformatics",
          b: "Molecular Biology",
          c: "Multiomics",
          d: "Clinical Psychology"
        },
        correctAnswer: "c"
      },
      {
        question: "Which of the following skills does Aura Rahman possess?",
        answers: {
          a: "Graphic Design",
          b: "Next Generation Sequencing",
          c: "Relationship Management",
          d: "Marketing Strategy"
        },
        correctAnswer: "b"
      },
      {
        question: "What programming languages is Aura Rahman proficient in?",
        answers: {
          a: "Java and C++",
          b: "R and Python",
          c: "HTML and CSS",
          d: "SQL and JavaScript"
        },
        correctAnswer: "b"
      }
    ];
function buildQuiz() {
// variable to store the HTML output
const output = [];
for(i=0; i<quizQuestions.length; i++){
// store list of answer choices
const answers = [];
// for each available answer to this question add an HTML radio button
for(letter in quizQuestions[i].answers)
{
answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
+ letter + ': '
+ quizQuestions[i].answers[letter]
+ '</label>'
);
}
// add this question and its answers to the output
output.push(
'<div class="question">' + quizQuestions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
);
}
// combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}
function showResults() {
// gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');
// keep track of user's answers 
var numCorrect = 0;
// for each question find the selected answer
for(i=0; i<quizQuestions.length; i++){
userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
// if answer is correct add to the number of correct answers
if(userAnswer===quizQuestions[i].correctAnswer){
numCorrect++;
// and colour the answers green
answerContainers[i].style.color = 'lightgreen';
}
// if answer is wrong or blank
else{
//colour the answers red
answerContainers[i].style.color = 'red';
}
}
// show number of correct answers out of total
if (numCorrect === 0) { 
resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
}
if (numCorrect === 1) { 
resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
}
if (numCorrect === 2) { 
resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
}
if (numCorrect === 3) { 
resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Aura pretty well!";
}
if (numCorrect === 4) { 
resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Aura so well!";
}
}
// load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
     }