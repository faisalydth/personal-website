// Header variables
const header = document.querySelector("header");
const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelector("#nav-list");
const hdrRight = document.querySelector("#hdr-right");
const menuArrow = document.querySelector("#menu-arrow");
const btnNav = document.querySelectorAll("#hdr-right .btn-nav");

// About variables
const btnSkills = document.querySelectorAll(".btn-skills");
const btnSklArrow = document.querySelectorAll(".btn-skills i");
const dtlSkills = document.querySelectorAll(".dtl-skills");
const barFill = document.querySelectorAll(".bar-fill");
const pctSkills = document.querySelectorAll(".pct-skills");

// Show/hide menu list on click
navMenu.addEventListener("click", toggleMenu);

// Close menu list on click
for (let i = 0; i < btnNav.length; i++) {
  btnNav[i].addEventListener("click", toggleMenu);
};

// Function to toggle menu list
function toggleMenu() {
  // Open menu list
  if (hdrRight.classList.contains("hidden")) {
    // Toggle menu arrow
    menuArrow.classList.remove("fa-caret-down");
    menuArrow.classList.add("fa-caret-up");
    // Toggle menu list
    navMenu.classList.add("open");
    hdrRight.classList.remove("hidden");
  }
  // Close menu list
  else {
    // Toggle menu arrow
    menuArrow.classList.add("fa-caret-down");
    menuArrow.classList.remove("fa-caret-up");
    // Toggle menu list
    navMenu.classList.remove("open");
    hdrRight.classList.add("hidden");
  };
};

// Validate media screen
if (window.matchMedia("screen and (min-width: 600px)").matches) {
  navMenu.classList.add("hidden");
  navList.classList.remove("hidden");
} else {
  navMenu.classList.remove("hidden");
  navList.classList.add("hidden");
};

// Sticky navigation bar on scroll
window.addEventListener("scroll", () => {
  let scrTop = window.scrollY;
  let medScreen = window.matchMedia("screen and (min-width: 600px)").matches;
  if (medScreen) {
    if (scrTop > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    };
  };
});

// Show/hide detail of skill on click
for (let i = 0; i < btnSkills.length; i++) {
  btnSkills[i].addEventListener("click", () => {
    if (dtlSkills[i].classList.contains("hidden")) {
      // Toggle arrow
      btnSklArrow[i].classList.remove("fa-caret-right");
      btnSklArrow[i].classList.add("fa-caret-down");
      // Toggle detail of skill
      btnSkills[i].classList.remove("close");
      dtlSkills[i].classList.remove("hidden");
    } else {
      // Toggle arrow
      btnSklArrow[i].classList.remove("fa-caret-down");
      btnSklArrow[i].classList.add("fa-caret-right");
      // Toggle detail of skill
      btnSkills[i].classList.add("close");
      dtlSkills[i].classList.add("hidden");
    };
  });
};

// Fill skillbar
for (let i = 0; i < pctSkills.length; i++) {
  let x = parseInt(pctSkills[i].textContent);
  barFill[i].style.width = x + "%";
};