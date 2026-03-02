const abstract = document.getElementById("abstract");
const wordCount = document.getElementById("wordCount");
const form = document.getElementById("individualForm");
const searchBtn = document.getElementById("searchInvestorsBtn");
const matchesSection = document.getElementById("investorMatches");
const matchesContainer = document.getElementById("matchesContainer");

// Word counter
abstract.addEventListener("input", () => {
  const words = abstract.value.trim().split(/\s+/).filter(w => w.length > 0);
  wordCount.textContent = `Words: ${words.length}`;
});

// Form validation
form.addEventListener("submit", (e) => {
  const words = abstract.value.trim().split(/\s+/).filter(w => w.length > 0);
  if (words.length < 500) {
    alert("Abstract must be at least 500 words.");
    e.preventDefault();
  }
});

// Investor search simulation
searchBtn.addEventListener("click", () => {
  matchesSection.classList.remove("hidden");
  matchesContainer.innerHTML = `
    <div class="investor-card"><strong>Investor A</strong><br>Domain: Tech<br>Email: investA@example.com</div>
    <div class="investor-card"><strong>Investor B</strong><br>Domain: Healthcare<br>Email: investB@example.com</div>
    <div class="investor-card"><strong>Investor C</strong><br>Domain: FinTech<br>Email: investC@example.com</div>
  `;
});
