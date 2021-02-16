// UI VARIABLES
const $header = document.querySelector("header"),
  $nav = document.querySelector("nav"),
  $hamburgerIcon = document.querySelector(".hamburger-icon"),
  $navLinks = document.querySelector("nav .right-links");

const hideNavLinks = () => {
  $navLinks.classList.remove("show-nav-links");
  $hamburgerIcon.classList.remove("fa-times");
};

// TOGGLE NAV LINKS (SHOW/HIDE)
$hamburgerIcon.addEventListener("click", (e) => {
  $navLinks.classList.toggle("show-nav-links");
  e.target.classList.toggle("fa-times");
});

// CLOSE NAV LINKS WHEN MOUSE LEAVES NAV
$nav.addEventListener("mouseleave", hideNavLinks);

const options = {
  rootMargin: "-100px 0px 0px 0px",
};
const navObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      $nav.classList.add("nav-change");
    } else {
      $nav.classList.remove("nav-change");
    }
  });
}, options);
navObserver.observe($header);
