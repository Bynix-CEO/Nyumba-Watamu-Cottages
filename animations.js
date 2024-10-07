gsap.from(".topBar", {
  opacity: 0.5,
  duration: 3,
});

gsap.from(".heroText", {
  scale: 0.2,
  duration: 2,
});

// JavaScript to toggle the menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
