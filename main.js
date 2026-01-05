const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });

  // Close menu when clicking a link (mobile)
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navMenu.classList.remove("is-open"));
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Demo form
function handleSubmit(e){
  e.preventDefault();
  const hint = document.getElementById("formHint");
  if (hint) {
    hint.textContent = "Pesanmu tersimpan di browser (demo). Kalau mau real, pakai Formspree/Google Form.";
  }
  e.target.reset();
  return false;
}
window.handleSubmit = handleSubmit;
