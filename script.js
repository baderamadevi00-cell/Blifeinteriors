
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after selecting a section
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year
document.getElementById("year").textContent =
  new Date().getFullYear();
