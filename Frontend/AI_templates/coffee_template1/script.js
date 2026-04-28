// Mobile Menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.onclick = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
};

// Simple testimonial slider
const texts = [
  "Amazing coffee experience!",
  "Best place to chill!",
  "Loved the ambience!"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % texts.length;
  document.getElementById("testimonial-text").innerText = texts[i];
}, 3000);