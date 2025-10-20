// ----- Mobile Menu Toggle -----
const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
hamburger.innerHTML = "<span></span><span></span><span></span>";
document.querySelector(".navbar").appendChild(hamburger);

const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// ----- Animate Skills Bars -----
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".progress-bar");
  const triggerBottom = window.innerHeight * 0.9;

  skills.forEach(skill => {
    const boxTop = skill.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      skill.style.width = skill.getAttribute("style").match(/width:\s*([\d%]+)/)[1];
    }
  });
});
