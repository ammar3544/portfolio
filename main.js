const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navMenu.classList.remove("is-open"));
  });
}

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Demo contact form
function handleSubmit(e){
  e.preventDefault();
  const hint = document.getElementById("formHint");
  if (hint) hint.textContent = "Sent (demo). Connect Formspree or backend to make it real.";
  e.target.reset();
  return false;
}
window.handleSubmit = handleSubmit;

// Projects filter (works only on /projects page)
const grid = document.getElementById("projectsGrid");
if (grid) {
  const btns = document.querySelectorAll("[data-filter]");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("is-on"));
      btn.classList.add("is-on");

      const f = btn.dataset.filter;
      [...grid.querySelectorAll(".project")].forEach(card => {
        const tags = (card.dataset.tags || "").split(/\s+/);
        const show = (f === "all") || tags.includes(f);
        card.style.display = show ? "" : "none";
      });
    });
  });
}
