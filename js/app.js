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
  const hamburgerDiv = document.getElementsByClassName("hamburger");
  if (hamburgerDiv.length) {
    hamburgerDiv[0].addEventListener("click", function () {
      this.classList.toggle("is-active");
    });
  }
});
