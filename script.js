// Quiz Questions
const questions = [
  { q: "When did we first meet?", options: ["In school", "At a wedding", "Online", "In college"], answer: 0 },
  { q: "What’s my favorite thing about you?", options: ["Your eyes", "Your laugh", "Your kindness", "Your style"], answer: 2 },
  { q: "Where was our first date?", options: ["Cafe", "Park", "Mall", "Beach"], answer: 1 },
  { q: "What’s my favorite color?", options: ["Red", "Black", "Blue", "Pink"], answer: 3 },
  { q: "Which song reminds me of you?", options: ["Perfect", "Love Me Like You Do", "All of Me", "Tum Hi Ho"], answer: 2 },
  { q: "What’s our special date?", options: ["Feb 14", "Jan 1", "Your birthday", "Our anniversary"], answer: 3 },
  { q: "What makes me smile?", options: ["Your jokes", "Your messages", "Your voice", "All of the above"], answer: 3 },
  { q: "Which food do we both love?", options: ["Pizza", "Pasta", "Biryani", "Ice Cream"], answer: 0 },
  { q: "What do I call you most?", options: ["Sweetie", "Baby", "Cutie", "Jaan"], answer: 3 },
  { q: "How much do I love you?", options: ["More than pizza", "To the moon", "Endlessly", "Infinite"], answer: 3 },
];

let current = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("quiz-container").innerHTML = `
    <h2 class="question">${q.q}</h2>
    <div class="options">
      ${q.options.map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`).join('')}
    </div>
  `;
}

function checkAnswer(i) {
  if (i === questions[current].answer) {
    score++;
  }
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").innerHTML = `
    <h2 class="result">You scored ${score}/10 💖</h2>
    <p>That's ${score * 10}% of infinite love 💘</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

// Slideshow
const slides = document.querySelectorAll('.slideshow img');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000);
