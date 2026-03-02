// Modal handling
const individualBtn = document.getElementById("individualBtn");
const teamBtn = document.getElementById("teamBtn");
const individualModal = document.getElementById("individualModal");
const teamModal = document.getElementById("teamModal");
const closeButtons = document.querySelectorAll(".close");

individualBtn.onclick = () => {
  individualModal.style.display = "block";
};

teamBtn.onclick = () => {
  teamModal.style.display = "block";
};

closeButtons.forEach(btn => {
  btn.onclick = () => {
    btn.parentElement.parentElement.style.display = "none";
  };
});

window.onclick = (event) => {
  if (event.target === individualModal) {
    individualModal.style.display = "none";
  }
  if (event.target === teamModal) {
    teamModal.style.display = "none";
  }
};
