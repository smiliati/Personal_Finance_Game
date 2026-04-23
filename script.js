// ===============================
// PLAYER STARTING STATS
// Change these if you want
// ===============================
const startingStats = {
  cash: 2000,
  savings: 500,
  debt: 1000,
  creditScore: 650,
  stress: 30
};

// ===============================
// SCENARIOS
// Replace these with your group's own
// Each choice can change stats
// ===============================
const scenarios = [
  {
    title: "Your First Paycheck",
    text: "You just got your first paycheck from a part-time job. What do you do with the extra money?",
    choices: [
      {
        text: "Spend most of it on clothes and eating out",
        effects: { cash: -300, savings: 0, debt: 0, creditScore: 0, stress: -5 },
        feedback: "Fun now, but you missed a chance to build a financial cushion."
      },
      {
        text: "Put part into savings and keep the rest for spending",
        effects: { cash: -100, savings: +200, debt: 0, creditScore: 0, stress: -2 },
        feedback: "Nice balance. You enjoyed some money while still saving."
      },
      {
        text: "Use it to pay down debt",
        effects: { cash: -200, savings: 0, debt: -200, creditScore: +10, stress: -4 },
        feedback: "Strong long-term choice. Lower debt can help your financial future."
      }
    ]
  },
  {
    title: "Emergency Car Repair",
    text: "Your car suddenly needs a $600 repair so you can keep getting to work and class. What do you do?",
    choices: [
      {
        text: "Put it on a credit card",
        effects: { cash: 0, savings: 0, debt: +600, creditScore: -10, stress: +8 },
        feedback: "Quick fix, but expensive debt can snowball."
      },
      {
        text: "Use your savings",
        effects: { cash: 0, savings: -600, debt: 0, creditScore: 0, stress: -5 },
        feedback: "This is exactly what emergency savings are for."
      },
      {
        text: "Ignore the repair for now",
        effects: { cash: 0, savings: 0, debt: 0, creditScore: 0, stress: +12 },
        feedback: "Ignoring necessary expenses often makes problems worse later."
      }
    ]
  },
  {
    title: "Credit Card Temptation",
    text: "A store offers you 20% off today if you open a new credit card. What do you do?",
    choices: [
      {
        text: "Open the card and buy things you weren't planning to buy",
        effects: { cash: 0, savings: 0, debt: +400, creditScore: -15, stress: +6 },
        feedback: "Impulse spending and extra debt can hurt your financial progress."
      },
      {
        text: "Open the card, buy only what you already budgeted for, and plan to pay it off immediately",
        effects: { cash: -150, savings: 0, debt: 0, creditScore: +5, stress: 0 },
        feedback: "This can work if you're disciplined, but it requires control."
      },
      {
        text: "Skip the card and stick to your budget",
        effects: { cash: 0, savings: 0, debt: 0, creditScore: 0, stress: -1 },
        feedback: "Good self-control. Not every discount is actually a good deal."
      }
    ]
  }
];

// ===============================
// GAME STATE
// ===============================
let playerStats = {};
let currentScenarioIndex = -1;
let selectedChoice = null;

// ===============================
// DOM ELEMENTS
// ===============================
const cashEl = document.getElementById("cash");
const savingsEl = document.getElementById("savings");
const debtEl = document.getElementById("debt");
const creditScoreEl = document.getElementById("creditScore");
const stressEl = document.getElementById("stress");

const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");
const progressFillEl = document.getElementById("progressFill");

const scenarioTitleEl = document.getElementById("scenarioTitle");
const scenarioTextEl = document.getElementById("scenarioText");
const choicesContainerEl = document.getElementById("choicesContainer");
const feedbackBoxEl = document.getElementById("feedbackBox");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");

// ===============================
// INITIAL SETUP
// ===============================
totalQuestionsEl.textContent = scenarios.length;
resetGameDisplay();

// ===============================
// EVENT LISTENERS
// ===============================
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goToNextScenario);
restartButton.addEventListener("click", restartGame);

// ===============================
// FUNCTIONS
// ===============================
function startGame() {
  playerStats = { ...startingStats };
  currentScenarioIndex = 0;
  selectedChoice = null;

  startButton.classList.add("hidden");
  restartButton.classList.add("hidden");
  feedbackBoxEl.classList.add("hidden");
  feedbackBoxEl.textContent = "";

  updateStatsDisplay();
  renderScenario();
}

function renderScenario() {
  const scenario = scenarios[currentScenarioIndex];
  selectedChoice = null;

  scenarioTitleEl.textContent = scenario.title;
  scenarioTextEl.textContent = scenario.text;
  feedbackBoxEl.classList.add("hidden");
  feedbackBoxEl.textContent = "";
  nextButton.classList.add("hidden");

  currentQuestionEl.textContent = currentScenarioIndex + 1;
  updateProgressBar();

  choicesContainerEl.innerHTML = "";

  scenario.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = choice.text;

    button.addEventListener("click", () => handleChoice(index, button));

    choicesContainerEl.appendChild(button);
  });
}

function handleChoice(choiceIndex, clickedButton) {
  if (selectedChoice !== null) return;

  const scenario = scenarios[currentScenarioIndex];
  const choice = scenario.choices[choiceIndex];
  selectedChoice = choiceIndex;

  applyEffects(choice.effects);
  updateStatsDisplay();

  const allChoiceButtons = document.querySelectorAll(".choice-btn");
  allChoiceButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("selected");
  });

  clickedButton.classList.add("selected");

  feedbackBoxEl.textContent = choice.feedback;
  feedbackBoxEl.classList.remove("hidden");

  nextButton.classList.remove("hidden");
}

function applyEffects(effects) {
  playerStats.cash += effects.cash || 0;
  playerStats.savings += effects.savings || 0;
  playerStats.debt += effects.debt || 0;
  playerStats.creditScore += effects.creditScore || 0;
  playerStats.stress += effects.stress || 0;

  // Keep values in reasonable ranges
  if (playerStats.cash < 0) playerStats.cash = 0;
  if (playerStats.savings < 0) playerStats.savings = 0;
  if (playerStats.debt < 0) playerStats.debt = 0;
  if (playerStats.creditScore < 300) playerStats.creditScore = 300;
  if (playerStats.creditScore > 850) playerStats.creditScore = 850;
  if (playerStats.stress < 0) playerStats.stress = 0;
  if (playerStats.stress > 100) playerStats.stress = 100;
}

function goToNextScenario() {
  currentScenarioIndex++;

  if (currentScenarioIndex >= scenarios.length) {
    showFinalResults();
  } else {
    renderScenario();
  }
}

function showFinalResults() {
  choicesContainerEl.innerHTML = "";
  nextButton.classList.add("hidden");
  restartButton.classList.remove("hidden");

  const result = getEndingMessage();

  scenarioTitleEl.textContent = "Game Over";
  scenarioTextEl.innerHTML = `
    You finished your financial journey.
    <div class="result-summary">
      <h3>${result.title}</h3>
      <p>${result.message}</p>
      <p><strong>Final Stats:</strong></p>
      <ul>
        <li>Cash: ${formatMoney(playerStats.cash)}</li>
        <li>Savings: ${formatMoney(playerStats.savings)}</li>
        <li>Debt: ${formatMoney(playerStats.debt)}</li>
        <li>Credit Score: ${playerStats.creditScore}</li>
        <li>Stress: ${playerStats.stress}</li>
      </ul>
    </div>
  `;

  feedbackBoxEl.classList.add("hidden");
  currentQuestionEl.textContent = scenarios.length;
  progressFillEl.style.width = "100%";
}

function getEndingMessage() {
  const financialHealthScore =
    playerStats.cash +
    playerStats.savings -
    playerStats.debt +
    playerStats.creditScore * 2 -
    playerStats.stress * 10;

  if (playerStats.debt === 0 && playerStats.savings >= 1000 && playerStats.creditScore >= 700) {
    return {
      title: "Financially Strong",
      message: "You made thoughtful choices, limited debt, and built a healthy financial foundation."
    };
  }

  if (financialHealthScore >= 2500) {
    return {
      title: "On the Right Track",
      message: "You made mostly strong decisions. You are building a stable future, even if there is still room to improve."
    };
  }

  if (playerStats.debt > playerStats.savings && playerStats.stress >= 60) {
    return {
      title: "Financially Stressed",
      message: "Your choices created pressure through debt and stress. A stronger budget and emergency plan would help."
    };
  }

  return {
    title: "Still Learning",
    message: "You made a mix of good and risky choices. With better planning, budgeting, and savings habits, your future can improve."
  };
}

function restartGame() {
  playerStats = {};
  currentScenarioIndex = -1;
  selectedChoice = null;
  resetGameDisplay();
}

function resetGameDisplay() {
  cashEl.textContent = "$0";
  savingsEl.textContent = "$0";
  debtEl.textContent = "$0";
  creditScoreEl.textContent = "0";
  stressEl.textContent = "0";

  currentQuestionEl.textContent = "0";
  totalQuestionsEl.textContent = scenarios.length;
  progressFillEl.style.width = "0%";

  scenarioTitleEl.textContent = "Welcome!";
  scenarioTextEl.textContent = "Click Start Game to begin your financial journey.";

  choicesContainerEl.innerHTML = "";
  feedbackBoxEl.textContent = "";
  feedbackBoxEl.classList.add("hidden");

  startButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  restartButton.classList.add("hidden");
}

function updateStatsDisplay() {
  cashEl.textContent = formatMoney(playerStats.cash);
  savingsEl.textContent = formatMoney(playerStats.savings);
  debtEl.textContent = formatMoney(playerStats.debt);
  creditScoreEl.textContent = playerStats.creditScore;
  stressEl.textContent = playerStats.stress;
}

function updateProgressBar() {
  const progressPercent = ((currentScenarioIndex + 1) / scenarios.length) * 100;
  progressFillEl.style.width = `${progressPercent}%`;
}

function formatMoney(amount) {
  return `$${amount.toLocaleString()}`;
}