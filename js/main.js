const toggle = document.getElementById("toggle");
let icon = toggle.querySelector(".fa-bars");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle nav
// toggle.addEventListener("click", () => {
//   document.body.classList.toggle("show-nav");
// });


// Toggle nav show hide
toggle.onclick = function () {
  document.body.classList.toggle("show-nav");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
};

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);



