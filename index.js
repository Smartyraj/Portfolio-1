/*======== Menu-icon navbar ========*/
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========Scroll section active link========*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 50;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*======= sticky navbar =======*/
  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*======= remove navbar menu when navbar link clicked(scroll) =======*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
