// Count value
let count = 0;

// Select elements
const counterEl = document.getElementById("counter");

// Event Listeners

// Increase by 1
document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  counterEl.textContent = count;
});

// Decrease by 1
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  counterEl.textContent = count;
});

// Increase by 10
document
  .getElementById("increaseByTenBtn")
  .addEventListener("click", function () {
    count = count + 10;
    counterEl.textContent = count;
  });

// Reset
document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  counterEl.textContent = count;
});
