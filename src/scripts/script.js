
// navbar hide when scroll down
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
})

// mobile nav btn action
const navBtn = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById('nav-menu');

navBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-nav-menu-show");
  navBtn.classList.toggle("change");
})
