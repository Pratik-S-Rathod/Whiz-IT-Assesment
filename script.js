let clickCount = 0;

function updateClickCounter() {
  document.getElementById("click-counter").textContent = `The buttons have been clicked ${clickCount} times`;
}

const applyNowButton = document.querySelector(".btn-success");
if (applyNowButton) {
  applyNowButton.addEventListener("click", () => {
    clickCount++;
    updateClickCounter();
  });
}

const bikeButtons = document.querySelectorAll(".bike-overlay");
bikeButtons.forEach(button => {
  button.addEventListener("click", () => {
    clickCount++;
    updateClickCounter();
  });
});