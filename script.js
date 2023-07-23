document.querySelector("form").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");

  emailInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  });

  if (!isValidEmail(emailInput.value)) {
    event.preventDefault();
    emailInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    alert("Success!");
    this.reset();
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
