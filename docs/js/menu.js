const body = document.querySelector("body");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-action__body");
const hero = document.querySelector('.hero__inner');
// ! Burger

body.addEventListener("click", burgerToggle);
function burgerToggle(e) {
   if (e.target.closest(".burger")) {
      if (burger.classList.contains("active")) {
         closeBurger();
      } else {
         openBurger();
      }
   } else if (!e.target.closest(".burger")) {
      closeBurger();
   }
}
function openBurger() {
   body.classList.add("lock");
   header.classList.add("active");
   burger.classList.add("active");
   menu.classList.add("active");
   hero.style.zIndex = '-1';
   window.addEventListener("scroll", closeBurger);
}
function closeBurger() {
   body.classList.remove("lock");
   header.classList.remove("active");
   burger.classList.remove("active");
   menu.classList.remove("active");
   setTimeout( () => {
      hero.style.zIndex = '0';
   }, 500);
   window.removeEventListener("scroll", closeBurger);
}

// ! <main></main>
document.querySelector("main").style.paddingTop = header.scrollHeight + "px";

// ! Header

const headerToHide = document.querySelectorAll("[data-to-hide]");
headerToHide.forEach((el) => {
   el.style.overflow = "hidden";
   el.style.transition = "height 0.3s ease 0s";
});

window.addEventListener("scroll", hideHeaderPart);
hideHeaderPart();
function hideHeaderPart() {
   if (window.pageYOffset > header.scrollHeight / 2) {
      headerToHide.forEach((el) => {
         el.style.height = "0px";
      });
      header.style.opacity = "0.8";
      header.style.zIndex = '10';
   } else if (window.pageYOffset < header.scrollHeight) {
      headerToHide.forEach((el) => {
         el.style.height = el.scrollHeight + "px";
      });
      header.style.opacity = "1";
      header.style.zIndex = '0';
   }
}
