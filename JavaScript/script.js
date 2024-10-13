var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  var rectangle = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectangle.left;

  if (insiderectval < rectangle.width / 2) {
    console.log("Left");
  } else {
    console.log("Right");
  }
});
