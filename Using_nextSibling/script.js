// Get the container element
const containerEl = document.getElementById("container");

// Get all buttons within the container
const buttonsEls = document.querySelectorAll("button");

// Loop through each button and change the text of its next sibling
buttonsEls.forEach((button) => {
  const nextEl = button.nextSibling;
  // Check if the next sibling is an element node
  if (nextEl && nextEl.nodeType === 3) {
    nextEl.textContent = "Changed Text";
  }
});
