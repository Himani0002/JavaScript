let cursorDot = document.querySelector(".cursor-dot");
let cursorOutline = document.querySelector(".cursor-outline");

cursorDot.style.position = "absolute"; // Ensure the cursorDot is positioned absolutely
cursorOutline.style.position = "absolute"; // Ensure the cursorOutline is positioned absolutely

window.addEventListener("mousemove", function (dets) {
  const postX = dets.pageX;
  const postY = dets.pageY;

  cursorDot.style.left = `${postX}px`;
  cursorDot.style.top = `${postY}px`;
  cursorOutline.style.left = `${postX}px`;
  cursorOutline.style.top = `${postY}px`;

  cursorOutline.animate(
    {
      left: `${postX}px`,
      top: `${postY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
