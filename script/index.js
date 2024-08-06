// Quiz questions array
const myQuestions = [
    {
      question: "Which of the following is the correct syntax to create an object in JavaScript?",
      answers: {
        a: "let obj = {};",
        b: "let obj = [];",
        c: "let obj = ();",
        d: "let obj = <>;"
      },
      correctAnswer: "a"
    },

    {
      question: "Which of the following is a valid function declaration in JavaScript?", 
      answers: {
        a: "function myFunction {}",
        b: "function myFunction() {}",
        c: "function:myFunction() {}",
        d: "function = myFunction() {}"
      },
      correctAnswer: "b"
    },

    {
      question: "In HTML, which attribute is used to specify that an input field must be filled out before submitting the form?", 
      answers: {
        a: "placeholder",
        b: "validate",
        c: "required",
        d: "formvalidate"
      },
      correctAnswer: "c"
    },

    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: {
        a: "_myVar",
        b: "$myVar",
        c: "2myVar",
        d: "myVar"
      },
      correctAnswer: "c"
    },

    {
      question: "Which CSS property is used to change the text color of an element?",
      answers: {
        a: "font-color",
        b: "color",
        c: "text-color",
        d: "background-color"
      },
      correctAnswer: "b"
    },
    
    {
      question: "Which of the following can be regarded as a strict equility?",
      answers: {
        a: "=",
        b: "==",
        c: "===",
        d: "All of the above"
      },
      correctAnswer: "c"
    },

    {
      question: "The following can be used to display JavaScript output on the screen except.",
      answers: {
        a: "document.write()",
        b: "console.log()",
        c: "alert()",
        d: "document.getElementById()"
      },
      correctAnswer: "d"
    },

    {
      question: "__________ can be used for verible declaration except.",
      answers: {
        a: "if",
        b: "let",
        c: "var",
        d: "const"
      },
      correctAnswer: "a"
    },

    {
      question: "Which of the following can be used to declare a veriable that cannot be reassigned?",
      answers: {
        a: "if",
        b: "let",
        c: "var",
        d: "const"
      },
      correctAnswer: "d"
    },

    {
      question: "What is the correct way to include a comment in CSS?",
      answers: {
        a: "//this is a comment",
        b: "/this is a comment",
        c: "/* this is a comment */",
        d: "This is a comment"
      },
      correctAnswer: "c"
    },
]
    
  // Function to code the quiz
  function buildQuiz() {

    const output = [];
  
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
  
      for (const letter in currentQuestion.answers) {
        answers.push(
          `<li>
            <label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter}: ${currentQuestion.answers[letter]}
            </label>
          </li>`
        );
      }
  
      // Add this question and its answers to the output
      output.push(
        `<div class="question">
          <h2>${currentQuestion.question}</h2>
          <ul class="options">${answers.join("")}</ul>
        </div>`
      );
    });
  
    // Combine our output list into one string of HTML and put it on the page
    document.getElementById("quiz").innerHTML = output.join("");
  }
  
  // Function to show the results
  function showResults() {
    
    const answerContainers = document.getElementById("quiz").querySelectorAll(".options");
  
    let numCorrect = 0;
  
    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // If answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // Add to the number of correct answers
        numCorrect++;
      }
    });
  
    // Show number of correct answers out of total
    
    document.getElementById("results").innerText = `You scored ${numCorrect} out of ${myQuestions.length}`;
    document.getElementById("comment").innerText = `Quiz Completed`;
  
    // Hide the submit button and show the reset button
    document.getElementById("submit").classList.add("hidden");
    document.getElementById("reset").classList.remove("hidden");
  }
  
  // Function to reset the quiz
  function resetQuiz() {
    
    document.getElementById("results").innerText = "";
    document.getElementById("comment").innerText = "";
  
    buildQuiz();
  
    document.getElementById("submit").classList.remove("hidden");
    document.getElementById("reset").classList.add("hidden");
  }
  
  // Display quiz right away
  buildQuiz();
  
  // On submit, show results
  document.getElementById("submit").addEventListener("click", showResults);
  
  // On reset, reset the quiz
  document.getElementById("reset").addEventListener("click", resetQuiz);
  