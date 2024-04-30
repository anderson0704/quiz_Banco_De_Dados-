const questions = [
    {
      question: "Qual é a linguagem de consulta padrão para banco de dados relacionais?",
      choices: ["SQL", "JavaScript", "Python", "Java"],
      answer: "SQL"
    },
    {
      question: "O que significa 'CRUD' em bancos de dados?",
      choices: ["Create, Read, Update, Delete", "Compute, Read, Update, Delete", "Copy, Read, Update, Delete", "Code, Read, Update, Delete"],
      answer: "Create, Read, Update, Delete"
    },
    {
      question: "Qual é o comando SQL para selecionar todos os registros de uma tabela?",
      choices: ["SELECT * FROM table", "SELECT FROM table WHERE id = 1", "SELECT table", "SELECT ALL FROM table"],
      answer: "SELECT * FROM table"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
  
    choicesElement.innerHTML = '';
    q.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => {
        checkAnswer(choice);
      });
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = Você acertou ${score} de ${questions.length} perguntas.;
  }
  
  submitButton.addEventListener('click', () => {
    checkAnswer();
  });
  
  showQuestion();