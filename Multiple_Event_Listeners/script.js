// Access the button element
const buttonEl = document.getElementById("actionButton");
// single click
buttonEl.addEventListener("click", function () {
  console.log("Button was clicked!");
});
// double click
buttonEl.addEventListener("dblclick", function () {
  console.log("Button was double clicked!");
});
// mouse enter
buttonEl.addEventListener("mouseenter", function () {
  console.log("Mouse was entered!");
});
// mouse leave
buttonEl.addEventListener("mouseleave", function () {
  console.log("Mouse left!");
});
