var puzzles = []; 
let currentIndex = 0;
let score = 0;


const puzzleNumberEl = document.getElementById("puzzle-number");
const puzzleTextEl = document.getElementById("puzzle-text");
const resultMessageEl = document.getElementById("result-message");
const userAnswerEl = document.getElementById("user-answer");
const progressEl = document.getElementById("progress");
const scoreDisplayEl = document.getElementById("score-display"); 


function normalizeAnswer(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\s]/gi, "")     
    .replace(/\b(a|an|the)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

}

async function loadPuzzles() {
  try {
    const response = await fetch("puzzles.json");
    puzzles = await response.json();
   
    puzzles.forEach(p => p.answered = false); 
    
    showPuzzle();
    updateScore();
  } catch (error) {
    console.error("Error loading puzzles:", error);
    puzzleTextEl.textContent = "⚠️ Could not load puzzles.json. Please check your setup.";
  }
}

function showPuzzle() {
  if (!Array.isArray(puzzles) || puzzles.length === 0) {
    puzzleTextEl.textContent = "⚠️ No puzzles available.";
    puzzleNumberEl.textContent = "Puzzle";
    return;
  }

  const safeIndex = Math.max(0, Math.min(currentIndex, puzzles.length - 1));
  currentIndex = safeIndex;

  const { question } = puzzles[currentIndex];
  puzzleNumberEl.textContent = `Puzzle ${currentIndex + 1}`;
  puzzleTextEl.textContent = question;

  // reset UI state for current puzzle
  resultMessageEl.textContent = "";
  userAnswerEl.value = "";

  // update progress based on position
  const percent = Math.round(((currentIndex + 1) / puzzles.length) * 100);
  progressEl.style.width = `${percent}%`;
}

function updateScore() {
  scoreDisplayEl.textContent = `Score: ${score} / ${puzzles.length}`; 
}


const checkBtn = document.getElementById("check-answer");
if (checkBtn) {
  checkBtn.addEventListener("click", () => {
    const userInputRaw = userAnswerEl.value.trim();

    if (userInputRaw === "") {
      resultMessageEl.textContent = "⚠️ Please enter your answer!";
      resultMessageEl.style.color = "orange";
      return;
    }

    const userInput = normalizeAnswer(userInputRaw);
    const correctAnswer = normalizeAnswer(puzzles[currentIndex].answer);

    if (userInput == correctAnswer) { 
      resultMessageEl.textContent = "🎉 Correct! Well done!";
      resultMessageEl.style.color = "limegreen";

      if (!puzzles[currentIndex].answered) {
        score++;
        puzzles[currentIndex].answered = true;
        updateScore();
      }
    } else {
      resultMessageEl.textContent = "❌ Incorrect! Try again.";
      resultMessageEl.style.color = "red";
    }
  });
}

const showBtn = document.getElementById("show-answer");
if (showBtn) {
  showBtn.addEventListener("click", () => {
    resultMessageEl.textContent = `💡 Correct Answer: ${puzzles[currentIndex].answer}`;
    resultMessageEl.style.color = "gold";
 
    if (!puzzles[currentIndex].answered) {
        score++;
        puzzles[currentIndex].answered = true;
        updateScore();
    }
  });
}

const nextBtn = document.getElementById("next");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentIndex < puzzles.length - 1) { 
      currentIndex++; 
    } else {
      currentIndex = 0; 
    }
    showPuzzle();
  });
}

const prevBtn = document.getElementById("prev");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = puzzles.length - 1;
    }
    showPuzzle();
  });
}

loadPuzzles();