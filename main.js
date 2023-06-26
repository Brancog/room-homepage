import "./sass/style.scss";

// SLIDER
let sliderPosition = 1;
const headerNavigation = document.querySelector(".header__navigation");
const headerHeading = document.querySelector(".header__heading");
const headerText = document.querySelector(".header__text");
const mediaQuery = window.matchMedia("(width >= 48em)");

const textContent = [
  {
    slide: 1,
    heading: "Discover innovative ways to decorate",
    text: "We provide umatched quliaty, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your propery a reflection of you and what you love.",
  },
  {
    slide: 2,
    heading: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throghout the country. find the branch nearest to contact us today.",
  },
  {
    slide: 3,
    heading: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const switchTopic = function (position) {
  // IMAGE SWITCH
  if (mediaQuery.matches) {
    headerNavigation.style.backgroundImage = `url("./dist/assets/desktop-image-hero-${sliderPosition}.jpg")`;
  } else {
    headerNavigation.style.backgroundImage = `url("./dist/assets/mobile-image-hero-${sliderPosition}.jpg")`;
  }

  // TEXT SWITCH
  headerHeading.innerHTML = textContent[sliderPosition - 1].heading;
  headerText.innerHTML = textContent[sliderPosition - 1].text;
};

switchTopic(sliderPosition);

// MOBILE NAVIGATION
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".slide-mobile-prev")) {
    if (sliderPosition === 1) {
      sliderPosition = 3;
    } else {
      sliderPosition--;
    }
    switchTopic(sliderPosition);
  } else if (e.target.closest(".slide-mobile-next")) {
    if (sliderPosition === 3) {
      sliderPosition = 1;
    } else {
      sliderPosition++;
    }
    switchTopic(sliderPosition);
  }
});

// DESKTOP NAVIGATION
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".slide-desktop-prev")) {
    if (sliderPosition === 1) {
      sliderPosition = 3;
    } else {
      sliderPosition--;
    }
    switchTopic(sliderPosition);
  } else if (e.target.closest(".slide-desktop-next")) {
    if (sliderPosition === 3) {
      sliderPosition = 1;
    } else {
      sliderPosition++;
    }
    switchTopic(sliderPosition);
  }
});

// MOBILE MENU TOGGLE
const hamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
const globalOverlay = document.querySelector(".global-overlay");

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".navbar__hamburger-btn") ||
    e.target.closest(".mobile-menu__close-btn")
  ) {
    mobileMenu.classList.toggle("mobile-menu--active");

    if (globalOverlay.classList.contains("hidden")) {
      globalOverlay.classList.remove("hidden");
      globalOverlay.classList.add("visible");
    } else {
      globalOverlay.classList.add("hidden");
      globalOverlay.classList.remove("visible");
    }
  }
});
