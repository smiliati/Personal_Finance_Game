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
    title: "Credit card offer",
    text: "You receive your first credit card with a $2,000 limit. What do you do?",
    choices: [
      {
        text: "Use most of the limit to buy things you want",
        effects: {cash: +500, savings: 0, debt: +2000, creditScore: -40, stress: -3},
        feedback: "High spending hurts your credit and creates long-term debt."
      },
      {
        text: "Use the card moderately and make minimum payments",
        effects: {cash: +200, savings: 0, debt: +800, creditScore: -10, stress: -2},
        feedback: "You kept spending under control, but interest will build over time."
      },
      {
        text: "Use it for small purchases and pay it off fully each month",
        effects: {cash: -100, savings: 0, debt: 0, creditScore: +25, stress: -1},
        feedback: "Excellent credit management builds long-term financial strength."
      }
    ]
  },
  {
    title: "Where Do You Keep Your Money?",
    text: "You've saved up $1,000 from working and want to keep it safe but also be able to use it if an emergency comes up. Where do you put your money?",
    choices: [
      {
        text: "Keep all the money in your checking account",
        effects: {cash: 0, savings: 0, debt: 0, creditScore: 0, stress: +2},
        feedback: "Your money is accessible, but it's also easier to spend. Without separation, it's harder to build a true emergency fund."
      },
      {
        text: "Put the money into a savings account for emergencies",
        effects: {cash: -1000, savings: +1000, debt: 0, creditScore: 0, stress: -5},
        feedback: "Keeping savings separate and accessible helps protect you from unexpected expenses."
      },
      {
        text: "Lock it into a long-term investment or CD for higher returns",
        effects: {cash: -1000, savings: +1000, debt: 0, creditScore: 0, stress: +4},
        feedback: "Higher returns are tempting, but better for long-term investment. Remember that you may need quick access to this money for unexpected emergencies."
      }
    ]
  },
  {
    title: "Saving for Your First Car",
    text: "You want to buy a car in 2 years. Which saving strategy do you choose?",
    choices: [
      {
        text: "Wait a year and then save aggressively",
        effects: {cash: 0, savings: +200, debt: 0, creditScore: 0, stress: +4},
        feedback: "Waiting to save makes it harder to reach your goal and you lose valuable time for your money to grow through compound interest."
      },
      {
        text: "Start saving small amounts consistently now",
        effects: {cash: -100, savings: +400, debt: 0, creditScore: 0, stress: -2},
        feedback: "Starting early allows your money to grow over time, even if the amount is small. The more time you have, the better compound interest works."
      },
      {
        text: "Don't save anything and plan to finance the car later",
        effects: {cash: 0, savings: 0, debt: +800, creditScore: -10, stress: +6},
        feedback: "By not saving, you rely on debt later. This increases the total cost and your financial stress."
      }
    ]
  },
  {
    title: "Monthly Budget Decision",
    text: "You are planning your monthly budget. How do you manage your money?",
    choices: [
      {
        text: "Spend freely without tracking expenses",
        effects: {cash: -500, savings: 0, debt: +300, creditScore: -15, stress: -4},
        feedback: "Lack of budgeting leads to overspending and financial instability."
      },
      {
        text: "Budget loosely and save a small amount",
        effects: {cash: -300, savings: +100, debt: 0, creditScore: +5, stress: -2},
        feedback: "A basic budget helps maintain control, but there's room for improvement."
      },
      {
        text: "Follow a strict budget and prioritize savings",
        effects: {cash: -200, savings: +300, debt: 0, creditScore: +10, stress: -1},
        feedback: "Strong budgeting habits improve long-term financial stability."
      }
    ]
  },
  {
    title: "Your First Paycheck",
    text: "You just got your first paycheck from a part-time job. What do you do with the extra money?",
    choices: [
      {
        text: "Spend most of it on clothes and eating out",
        effects: {cash: -300, savings: 0, debt: 0, creditScore: 0, stress: -5},
        feedback: "Fun now, but you missed a chance to build a financial cushion."
      },
      {
        text: "Put part into savings and keep the rest for spending",
        effects: {cash: -100, savings: +200, debt: 0, creditScore: 0, stress: -2},
        feedback: "Nice balance. You enjoyed some money while still saving."
      },
      {
        text: "Use it to pay down debt",
        effects: {cash: -200, savings: 0, debt: -200, creditScore: +10, stress: -4},
        feedback: "Strong long-term choice. Lower debt can help your financial future."
      }
    ]
  },
  {
    title: "Opening Up New Credit Cards",
    text: "You are planning on buying a new couch for your home ($1,000!) and are considering opening up a new credit card to pay with but are concerned about the inquiry's impact on your credit score and annual fees. What kind of credit card will you choose?",
    choices: [
      {
        text: "A digital wallet like an Apple card",
        effects: {cash: 0, savings: 0, debt: +1000, creditScore: -5, stress: -1},
        feedback: "Digital wallets are great for those who use contactless payments, frequently purchase online, and don't want to pay an annual fee; however, they don't offer many of the benefits that traditional credit cards offer like higher cash back thresholds and rewards redemption."
      },
      {
        text: "A premium/ luxury card like Amex Platinum or Chase Sapphire Reserve",
        effects: {cash: -800, savings: +300, debt: +1000, creditScore: -15, stress: -5},
        feedback: "Luxury cards have high annual fees but tons of benefits and cash back potential. A big purchase like a new couch could mean lots of cash back and savings potential in the future.... If you can handle the stress and fees."
      },
      {
        text: "Traditional rewards cards like Capital One Venture",
        effects: {cash: +95, savings: 0, debt: +1000, creditScore: -7, stress: -3},
        feedback: "Regular rewards cards are often the most manageable and user friendly, but they don't often provide unique benefits or high savings potential."
      }
    ]
  },
  {
    title: "Purchasing a New Car",
    text: "You have had your current car for 10 years now and have decided that you are seriously considering trading it in for a new one. While your current car still runs, the maintenance costs for an aging car are piling up, making it difficult to decide if it is really worth keeping. What will you do?",
    choices: [
      {
        text: "Keep your current car and pay the maintenance costs",
        effects: {cash: -300, savings: +500, debt: 0, creditScore: 0, stress: +4},
        feedback: "When considering whether or not to purchase a new car, the state of your car and how much longer you think it will run is important to consider. If the car only has a few months or years left, it's better to get a new one before you need it."
      },
      {
        text: "Purchase a new-to-you car that is 5 years old, has many of the features you want, and is certified used.",
        effects: {cash: -600, savings: 0, debt: 0, creditScore: -7, stress: -3},
        feedback: "Certified used cars are great investments because they are cheaper, more reliable, and thoroughly inspected."
      },
      {
        text: "Purchase a brand new car with all the features you want",
        effects: {cash: -800, savings: 0, debt: +500, creditScore: -7, stress: +2},
        feedback: "Brand new cars can be nice but are expensive. If you don't have any money saved for a new car already, you'll likely need to finance the car and might end up paying it off for a long time."
      }
    ]
  },
  {
    title: "Filing Your Taxes",
    text: "It's tax season! You are stressed and on a budget but need to get your taxes filed. What do you do?",
    choices: [
      {
        text: "File your taxes online using TurboTax",
        effects: {cash: 0, savings: 0, debt: 0, creditScore: 0, stress: -5},
        feedback: "Although it takes time out of your day to file taxes, you get the process done without having to pay extra to have a CPA do it for you. This is preferable to those with simple tax situations."
      },
      {
        text: "Hire a CPA to file your taxes for you",
        effects: {cash: -350, savings: +200, debt: 0, creditScore: 0, stress: -1},
        feedback: "Having a CPA file for you can be expensive, but it's less work for you and you might be able to get a higher tax refund."
      },
      {
        text: "Delay filing and deal with it later",
        effects: {cash: -100, savings: 0, debt: +500, creditScore: -20, stress: +7},
        feedback: "Not paying your taxes on time results in even more fees and stress."
      }
    ]
  },
  {
    title: "Car Insurance Claims",
    text: "While backing out of your driveway, you accidentally hit a mailbox, resulting in a large dent on your rear bumper. What do you do next?",
    choices: [
      {
        text: "Pay out of pocket for the repair and avoid filing a claim",
        effects: {cash: -500, savings: 0, debt: 0, creditScore: 0, stress: -1},
        feedback: "Paying out of pocket isn't fun, but if the out of pocket costs are the same or close to your deductible, you will save money because your insurance premiums won't go up."
      },
      {
        text: "File a claim with your insurance company",
        effects: {cash: -300, savings: 0, debt: 0, creditScore: 0, stress: -5},
        feedback: "Filing a claim with your insurance company can help provide some clarity on the process (recommending mechanics, helping with questions,etc.), but your insurance premiums will increase if an accident is on file."
      },
      {
        text: "Forgo repairing the dent and not address it until it effects the cars ability to run",
        effects: {cash: 0, savings: 0, debt: 0, creditScore: 0, stress: +3},
        feedback: "While it might seem smart in the short term to avoid dealing with the issue, you shouldn't wait until the car doesn't work to address the issue."
      }
    ]
  },
  {
    title: "Building Your Savings Habits",
    text: "You just started earning money regularly. You know saving is important, but it's tempting to spend. How do you handle your income?",
    choices: [
      {
        text: "Don't save and spend money as you earn it",
        effects: {cash: -300, savings: 0, debt: 0, creditScore: 0, stress: +5},
        feedback: "This feels good short-term, but you're setting yourself up for stress when unexpected expenses hit."
      },
      {
        text: "Save a small portion (about 10%) and spend the rest",
        effects: {cash: -250, savings: +50, debt: 0, creditScore: 0, stress: -2},
        feedback: "Good start. Building a habit matters more than the amount early on."
      },
      {
        text: "Save a large portion (30-50%) and limit unnecessary spending",
        effects: {cash: -150, savings: +150, debt: 0, creditScore: 0, stress: +2},
        feedback: "Strong discipline. This builds a safety net quickly and gives you real financial stability."
      }
    ]
  },
  {
    title: "First Investment Decision",
    text: "You've built some savings and are thinking about investing. You've heard about stocks, but you're not sure how much risk to take.",
    choices: [
      {
        text: "Invest all your money into a high-risk stock",
        effects: {cash: -300, savings: +300, debt: 0, creditScore: 0, stress: +6},
        feedback: "Risky move. You might gain big, but you could also lose a lot by not diversifying."
      },
      {
        text: "Invest a portion in a diversified index fund and keep the rest saved.",
        effects: {cash: -300, savings: +200, debt: 0, creditScore: 0, stress: -3},
        feedback: "Smart strategy. Diversification lowers risk while still helping your money grow over time."
      },
      {
        text: "Avoid investing and keep all your money in savings",
        effects: {cash: -300, savings: +150, debt: 0, creditScore: 0, stress: -1},
        feedback: "Safe, but you're missing out on long-term growth. Inflation will slowly reduce your money's value."
      }
    ]
  },
  {
    title: "Car Trouble Crisis",
    text: "Your car suddenly breaks down, and the repair costs $800. You rely on your car to get to work and school, so fixing it quickly is important. You don't have a lot of extra cash available right now. What do you do?",
    choices: [
      {
        text: "Use your emergency savings to pay for the repair",
        effects: {cash: 0, savings: -800, debt: 0, creditScore: 0, stress: -3},
        feedback: "This is exactly why emergency funds exist. You solved the problem without creating future financial issues."
      },
      {
        text: "Put the repair on a credit card",
        effects: {cash: 0, savings: 0, debt: +800, creditScore: -5, stress: +4},
        feedback: "It solves the problem now, but interest will make this more expensive over time if you don't pay it off quickly."
      },
      {
        text: "Delay the repair and try to get by without fixing it",
        effects: {cash: 0, savings: 0, debt: +200, creditScore: -3, stress: +7},
        feedback: "Delaying can make things worse: missed work, higher repair costs, and more stress down the line."
      }
    ]
  },
  {
    title: "Choosing Your Career Path",
    text: "You've graduated and received a job offer, but you're also considering further education to increase your future earning potential. Each option has pros and cons. What do you choose?",
    choices: [
      {
        text: "Take the full-time job immediately and start earning money",
        effects: {cash: +400, savings: +200, debt: 0, creditScore: 0, stress: -1},
        feedback: "You gain income right away, but you may limit your long-term earning potential depending on the job."
      },
      {
        text: "Go to college/trade school to improve your career opportunities",
        effects: {cash: -200, savings: -100, debt: +500, creditScore: -2, stress: +3},
        feedback: "This is an investment in your future, but it comes with upfront costs and debt."
      },
      {
        text: "Work part-time while going to school",
        effects: {cash: +100, savings: +50, debt: +200, creditScore: 0, stress: +4},
        feedback: "Balanced approach. You reduce debt and gain experience, but it can be stressful managing both."
      }
    ]
  },
  {
    title: "Limited-Time Deal Temptation",
    text: "You see an ad for a pair of sneakers that you want that says 'Only 3 left! 20% off today only!' You didn't plan to buy shoes in your budget this month. What do you do?",
    choices: [
      {
        text: "Buy them immediately so you don't miss out",
        effects: {cash: -200, savings: 0, debt: 0, creditScore: 0, stress: -5},
        feedback: "You gave in to scarcity so it feels good now, but this was an impulse purchase that may not align with your financial goals."
      },
      {
        text: "Wait a few days and decide later",
        effects: {cash: 0, savings: 0, debt: 0, creditScore: 0, stress: -1},
        feedback: "You exercised good self-control. Taking more time to think about bigger purchases can help you avoid impulse decisions and think more rationally about wants vs needs."
      },
      {
        text: "Skip the purchase and stick to your budget",
        effects: {cash: 0, savings: +200, debt: 0, creditScore: 0, stress: -2},
        feedback: "You showed strong financial discipline, avoided the marketing pressure, and prioritized your long-term goals."
      }
    ]
  },
  {
    title: "Office Supplies at Work",
    text: "You work part-time in an office and notice some of your coworkers occasionally taking office supplies (pens, paper, etc.) home. You're in school and could use some free office supplies. What do you do?",
    choices: [
      {
        text: "Take some supplies",
        effects: {cash: +10, savings: 0, debt: 0, creditScore: 0, stress: +3},
        feedback: "It may seem like it's not a big deal, but this crosses an ethical line. If you do this type of behavior regularly you can damage your professional reputation and other people's trust in you."
      },
      {
        text: "Ask your supervisor if you can take some for school",
        effects: {cash: 0, savings: 0, debt: 0, creditScore: 0, stress: -2},
        feedback: "Being transparent builds trust and protects your reputation."
      },
      {
        text: "Buy your own supplies",
        effects: {cash: -20, savings: 0, debt: 0, creditScore: +1, stress: -1},
        feedback: "You chose integrity over convenience. Small ethical decisions shape your long-term professional image."
      }
    ]
  },
  {
    title: "Choosing Your First Apartment",
    text: "You just graduated college and are choosing an apartment. Which option do you choose?",
    choices: [
      {
        text: "Choose the cheapest apartment to save money on rent",
        effects: {cash: +200, savings: +100, debt: 0, creditScore: 0, stress: +6},
        feedback: "You're saving money on housing, but did not take into account the commute and other quality-of-life factors. Hidden costs like time and stress can add up over time."
      },
      {
        text: "Choose the more expensive apartment that's closer to your work",
        effects: {cash: -300, savings: 0, debt: 0, creditScore: 0, stress: -5},
        feedback: "You prioritized convenience and safety, but the higher cost of housing reduces your financial flexibility and prevents you from saving more."
      },
      {
        text: "Find a balanced option within your budget and mid-distance from your work",
        effects: {cash: -100, savings: +50, debt: 0, creditScore: 0, stress: -2},
        feedback: "You successfully found a balance between saving money and prioritizing lifestyle factors."
      }
    ]
  },
  {
    title: "Choosing Between Job Offers",
    text: "You receive the following two job offers: (A) Higher salary but no benefits, (B) Lower salary but with health insurance and a retirement match. Which do you choose?",
    choices: [
      {
        text: "Accept job offer (A)",
        effects: {cash: +5000, savings: 0, debt: 0, creditScore: 0, stress: +5},
        feedback: "At first glance higher income seems better, but ignoring benefits like health insurance and retirement can cost you more in the long term."
      },
      {
        text: "Accept job offer (B)",
        effects: {cash: 0, savings: +150, debt: 0, creditScore: 0, stress: -5},
        feedback: "You thought long-term and decided that benefits like healthcare and retirement matching increase your total compensation."
      },
      {
        text: "Negotiate or compare total compensation before deciding",
        effects: {cash: +2500, savings: +75, debt: 0, creditScore: 0, stress: -1},
        feedback: "By evaluating total compensation you show strong financial awareness, and by negotiating you show confidence in your value as an employee."
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