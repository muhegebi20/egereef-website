document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const headerRight = document.querySelector(".header-right");

  burgerMenu.addEventListener("click", function () {
    headerRight.classList.toggle("active");
  });
});
