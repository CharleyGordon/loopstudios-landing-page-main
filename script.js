const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    hamburger.querySelector("img").src = "images/icon-close.svg";
  } else hamburger.querySelector("img").src = "images/icon-hamburger.svg";
});
