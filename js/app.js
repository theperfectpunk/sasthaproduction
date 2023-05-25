// load scss
import "../css/main.scss";

/* Swiper */
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// init Swiper:
new Swiper(".swiper", {
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
