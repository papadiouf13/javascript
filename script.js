const questions = [
    {
      question: "Quel est le Meilleur Language de Programmation en 2022?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 2,
    },
    {
      question: "Quelle est la capitale de la France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Combien font 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      question: "Qui est l'auteur de '1984'?",
      options: ["George Orwell", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"],
      correct: 0,
    },
    {
      question: "Quel est le plus grand océan?",
      options: ["Atlantique", "Pacifique", "Arctique", "Indien"],
      correct: 1,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const popup = document.getElementById("popup");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function loadQuestion() {
    // Charge la question actuelle
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Affiche les options
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      optionsContainer.appendChild(button);
    });
  
    // Désactive le bouton "Suivant" jusqu'à ce qu'une réponse soit sélectionnée
    nextButton.disabled = true;
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
    // Activer le bouton "Suivant"
    nextButton.disabled = false;
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showPopup();
    }
  });
  
  function showPopup() {
    // Affiche le popup avec le score
    scoreElement.textContent = score;
    popup.classList.remove("hidden");
    popup.style.display = "block"; // Force l'affichage du popup
  }
  
  restartButton.addEventListener("click", () => {
    popup.classList.add("hidden");
    popup.style.display = "none"; // Cache le popup
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  });
  
  loadQuestion();
  