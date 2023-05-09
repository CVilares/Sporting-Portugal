import { quotes } from './quotes.js' ;

let questions = [{
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
    alternatives: ['1906', '1910', '1922', '1945'],
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

  start: function () {
    let alternatives = document.querySelectorAll('.alternative');
    alternatives.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.checkAnswer(index);
      });
    });
    this.showQuestion(questions[this.currentPos]);
    this.randomQuotes();
  },

  showQuestion: function (q) {
    this.currentQuestion = q;
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;
    let alternatives = document.querySelectorAll('.alternative');
    alternatives.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });
  },

  nextQuestion: function () {
    this.currentPos++;
    if (this.currentPos === questions.length) {
      this.currentPos = 0;
    }
  },

  checkAnswer: function (user) {
    if (this.currentQuestion.correct === user) {
      console.log('Correct answer');
      this.totalScore++;
    } else {
      console.log('Wrong answer');
      this.resetScore();
    }
    this.updateScore();
    this.nextQuestion();
    this.showQuestion(questions[this.currentPos]);
    this.randomQuotes();
  },

  updateScore: function () {
    let scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Your score is: ${this.totalScore}`;
  },

  randomQuotes: async function () {
    let randomSelection = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomSelection].quote;
    document.getElementById("author").textContent = quotes[randomSelection].character;
  },
  
  resetScore: function () {
    this.totalScore = 0;
    this.updateScore();
  }

};

app.start();