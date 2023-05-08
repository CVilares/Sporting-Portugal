let questions = [
    {
      title: 'Who is the president of Sporting Clube de Portugal?',
      alternatives: ['Frederico Varandas', 'Bruno de Carvalho', 'Pedro Proença', 'Jorge Jesus'],
      correct: 0
    },
    {
      title: 'How many times has Sporting Clube de Portugal won the UEFA Champions League?',
      alternatives: ['1', '2', '3', 'Never won'],
      correct: 3
    },
    {
      title: 'Which stadium is used by Sporting Clube de Portugal?',
      alternatives: ['Estádio da Luz', 'Estádio José Alvalade', 'Estádio do Dragão', 'Estádio Municipal de Braga'],
      correct: 1
    },
    {
      title: 'What year was Sporting Clube de Portugal founded?',
      alternatives: ['1904', '1910', '1922', '1945'],
      correct: 0
    },
    {
      title: 'Who is the all-time leading goal scorer for Sporting Clube de Portugal?',
      alternatives: ['Cristiano Ronaldo', 'Fernando Peyroteo', 'Luís Figo', 'Ricardo Quaresma'],
      correct: 1
    },
    {
      title: 'Which team is considered the main rival of Sporting Clube de Portugal?',
      alternatives: ['SL Benfica', 'FC Porto', 'SC Braga', 'Vitória de Guimarães'],
      correct: 0
    }
  ];
  
  let app = {
    totalScore: 0,
    currentPos: 0,
    //start: This function is responsible for starting the quiz. It attaches click event listeners to each alternative element and calls the showQuestion function to display the first question.
    start: function () {
      let alternatives = document.querySelectorAll('.alternative');
      alternatives.forEach((element, index) => {
        element.addEventListener('click', () => {
          this.checkAnswer(index);
        });
      });
      this.showQuestion(questions[this.currentPos]);
    },
  //showQuestion: This function takes a question object as a parameter and displays the question title and alternatives on the HTML page. It uses the textContent property to set the content of the title and alternative elements.
    showQuestion: function (q) {
      this.currentQuestion = q;
      // Showing title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title;
      // Showing alternatives
      let alternatives = document.querySelectorAll('.alternative');
      alternatives.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
      });
    },
    //nextQuestion: This function increments the currentPos variable to move to the next question. If the end of the question list is reached, it wraps around to the first question.
    nextQuestion: function () {
      this.currentPos++;
      if (this.currentPos == questions.length) {
        this.currentPos = 0;
      }
    },
  //checkAnswer: This function is called when the user selects an answer. It compares the user's answer with the correct answer of the current question. If they match, it increments the totalScore variable. It then calls the updateScore function to display the updated score, moves to the next question using the nextQuestion function, and shows the next question using the showQuestion function.
    checkAnswer: function (user) {
      if (this.currentQuestion.correct === user) {
        console.log('Correct answer');
        this.totalScore++;
      } else {
        console.log('Wrong answer');
      }
      this.updateScore();
      this.nextQuestion();
      this.showQuestion(questions[this.currentPos]);
    },
  //updateScore: This function updates the score displayed on the HTML page. It retrieves the score element using its ID and sets the textContent property to display the current score.


    updateScore: function () {
      let scoreDiv = document.getElementById('score');
      scoreDiv.textContent = `Your score is: ${this.totalScore}`;
    }
  }
  
  app.start();
  