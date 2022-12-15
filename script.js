const primaryNav = document.querySelector(".primary-nav");
const toggleNav = document.querySelector(".toggle-nav");

toggleNav.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    toggleNav.setAttribute("area-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    toggleNav.setAttribute("area-expanded", false);
  }
});