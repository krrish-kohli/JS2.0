document.getElementById("sound1").addEventListener("click", function () {
  const audio = new Audio("audio/better.mp3");
  audio.play();
});

document.getElementById("sound2").addEventListener("click", function () {
  const audio = new Audio("audio/flow.mp3");
  audio.play();
});
