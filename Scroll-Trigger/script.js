document.querySelectorAll(".card ").forEach((card) => {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 15%",
      end: "bottom 15%",
      markers: true,
      scrub: true, // Ensure smooth scrolling animations
    },
  });
});
