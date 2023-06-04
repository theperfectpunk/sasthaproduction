// load scss
import "../css/main.scss";

/* Slider */
import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

/* LightBox */
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

lightbox.init();

// init Swiper:
new Swiper(".hero-swiper", {
  // configure Swiper to use modules
  modules: [Autoplay],
  // Optional parameters
  direction: "horizontal",
  rewind: true,
  cssMode: true,
  loop: true,
  loopedSlides: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
});

// init bts swiper
new Swiper(".bts-swiper", {
  slidesPerView: 5,
  spaceBetween: 24,
  modules: [Autoplay],
  // Optional parameters
  direction: "horizontal",
  rewind: true,
  cssMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  /** hamburger animation */
  const hamburgerDiv = document.getElementsByClassName("hamburger");
  const nav = document.getElementsByTagName("nav");
  const navItemContainer =
    document.getElementsByClassName("mobile-nav-overlay");

  const toggleMenu = function () {
    if (nav[0]) nav[0].classList.toggle("open");
    if (navItemContainer[0]) navItemContainer[0].classList.toggle("open");
    hamburgerDiv[0].classList.toggle("is-active");
  };
  hamburgerDiv[0].addEventListener("click", toggleMenu);

  /** hamburger close */
  const mobileNavOverlay = document.querySelectorAll(
    ".mobile-nav-overlay .nav-item"
  );

  for (const navItem of mobileNavOverlay) {
    navItem.addEventListener("click", toggleMenu);
  }
});
