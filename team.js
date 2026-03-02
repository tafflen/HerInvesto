const teamAbstract = document.getElementById("teamAbstract");
const teamWordCount = document.getElementById("teamWordCount");
const teamForm = document.getElementById("teamForm");
const addMemberBtn = document.getElementById("addMemberBtn");
const membersContainer = document.getElementById("membersContainer");
const teamSearchBtn = document.getElementById("teamSearchInvestorsBtn");
const teamMatchesSection = document.getElementById("teamInvestorMatches");
const teamMatchesContainer = document.getElementById("teamMatchesContainer");

let memberCount = 0;

// Word counter for abstract
teamAbstract.addEventListener("input", () => {
  const words = teamAbstract.value.trim().split(/\s+/).filter(w => w.length > 0);
  teamWordCount.textContent = `Words: ${words.length}`;
});

// Function to create a team member input row
function createMemberRow(index) {
  const div = document.createElement("div");
  div.classList.add("member-row");
  div.innerHTML = `
    <h4 style="flex: 1 1 100%; color:#ff69b4; margin: 4px 0;">Member ${index}</h4>
    <div style="display: flex; gap: 6px; width: 100%;">
      <input type="text" placeholder="Full Name" required style="flex: 1;">
      <input type="number" placeholder="Age" required style="flex: 1;">
    </div>
    <div style="display: flex; gap: 6px; width: 100%;">
      <input type="email" placeholder="Email" required style="flex: 1;">
      <input type="text" placeholder="Phone No" required style="flex: 1;">
    </div>
  `;
  return div;
}


// Initialize with 5 members
for (let i = 1; i <= 5; i++) {
  membersContainer.appendChild(createMemberRow(i));
  memberCount++;
}

// Add member button logic
addMemberBtn.addEventListener("click", () => {
  if (memberCount >= 6) {
    alert("Maximum 6 members allowed.");
    return;
  }
  memberCount++;
  membersContainer.appendChild(createMemberRow(memberCount));
});

// Form validation
teamForm.addEventListener("submit", (e) => {
  const words = teamAbstract.value.trim().split(/\s+/).filter(w => w.length > 0);

  if (words.length < 500) {
    alert("Abstract must be at least 500 words.");
    e.preventDefault();
    return;
  }

  if (memberCount < 5) {
    alert("Minimum 5 team members required.");
    e.preventDefault();
    return;
  }

  // File validation
  const files = teamForm.querySelectorAll("input[type='file']");
  for (let file of files) {
    if (file.hasAttribute("required") && file.files.length === 0) {
      alert("Please upload all required documents.");
      e.preventDefault();
      return;
    }
  }
});

// Investor search simulation
teamSearchBtn.addEventListener("click", () => {
  teamMatchesSection.classList.remove("hidden");
  teamMatchesContainer.innerHTML = `
    <div class="investor-card"><strong>Investor Alpha</strong><br>Domain: AI & Tech<br>Email: alpha@investors.com</div>
    <div class="investor-card"><strong>Investor Beta</strong><br>Domain: Healthcare<br>Email: beta@investors.com</div>
    <div class="investor-card"><strong>Investor Gamma</strong><br>Domain: FinTech<br>Email: gamma@investors.com</div>
  `;
});
