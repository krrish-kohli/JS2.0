// Accessing the username input and submit button
const usernameEl = document.getElementById("username");
const submitButtonEl = document.getElementById("submitButton");

// Create a custom event
const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

// Attach an event listener to handle the custom event
document.addEventListener("usernameSubmitted", function (event) {
  console.log(`Username is ${event.detail.text} has been submitted`);
});

// Attach an event listener to the submit button
submitButtonEl.addEventListener("click", function () {
  usernameSubmitted.detail.text = usernameEl.value;
  // dispatch custom event
  document.dispatchEvent(usernameSubmitted);
});
