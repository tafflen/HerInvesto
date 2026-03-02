document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const userType = document.getElementById("userType").value;

  if (name && email && password && userType) {
    document.getElementById("message").textContent = 
      `Welcome ${name}! You have registered as a ${userType}.`;
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = 
      "Please fill in all fields.";
    document.getElementById("message").style.color = "red";
  }
});
