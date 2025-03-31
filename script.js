"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const nav = document.querySelector(".nav");

const titlesticky = document.querySelector(".header__title");

const tabs = document.querySelectorAll(".operations__tab");

const tabContainer = document.querySelector(".operations");

const tabContent = document.querySelectorAll(".operations__content");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//////////////////////////////////////////////////////

//button scrolling

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  // // window.scrollTo(s1coords.x, s1coords.y, "smooth");
  // window.scrollTo({
  //   top: s1coords.y + window.pageYOffset,
  //   left: s1coords.x + window.pageXOffset,
  //   behavior: "smooth",
  // });
  // section1.scrollIntoView({ behavior: "smooth" });
  // section1.scrollIntoView({ behavior: "smooth" });
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////

//page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id) ;
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// console.log(getComputedStyle(massege).color);
// massege.style.height =
// Number.parseFloat(getComputedStyle(massege).height) + 50 + "px";

// massege.style.setProperty("color", "red");

//attributes

// console.log(logo);
// logo.classList.toggle();
// logo.classList.contains();

// const anywear = document.documentElement;
// anywear.addEventListener("click", (e) => {
//   console.log(e.target.getBoundingClientRect());
//   console.log(window.pageXOffset, window.pageYOffset);
//   console.log(
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

// });

// h1.addEventListener("mouseenter", alertH1);

//old School
// h1.onclick = function (e) {
//   this.style.backgroundColor = "skyblue";
// };
// rgb(255,255,255)

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// const randomInt = (max, min) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor = () => {
//   return `rgb(${randomInt(255, 0)},${randomInt(255, 0)},${randomInt(255, 0)})`;
// };

// console.log(randomColor(255, 0));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   // this.style.backgroundColor = randomColor();
//   console.log((this.style.backgroundColor = randomColor()));
//   e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log((this.style.backgroundColor = randomColor()));
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log((this.style.backgroundColor = randomColor()));
// });

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;
  // if (clicked) {
  //   clicked.classList.add("operations__tab--active");
  // }
  //remove class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabContent.forEach((c) => c.classList.remove("operations__content--active"));

  //active tab
  clicked.classList.add("operations__tab--active");

  //active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//sticky navigation

// const initialcoords = titlesticky.getBoundingClientRect();
// const initialcoords = section1.getBoundingClientRect();
// console.log(section1.getBoundingClientRect().top);
// console.log(window.scrollY);

// window.addEventListener("scroll", function () {
//   if (window.scrollY > section1.getBoundingClientRect().top)
//     nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// observeing
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
  // entry.forEach((el) => {
  //   if (!el.isIntersecting) {
  //     nav.classList.add("sticky");
  //   } else nav.classList.remove("sticky");
  // });
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal Sections

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  // section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//lazy loading images

const imageTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imageTargets.forEach((img) => {
  imgObserver.observe(img);
});
//slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnRight = document.querySelector(".slider__btn--right");
  const btnLeft = document.querySelector(".slider__btn--left");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //functions

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide='${slide}']`)
      .classList.add("dots__dot--active");
  };
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%) `)
    );
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();
  //event handlers & addeventlistener
  btnRight.addEventListener(
    "click",
    nextSlide
    //or
    // function () {
    // nextSlide();})

    //or
    // slides.forEach(
    //   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%) `)
    // );})
  );

  btnLeft.addEventListener(
    "click",
    prevSlide
    //or
    // function () {
    // if (curSlide === 0) {
    //   curSlide = maxSlide - 1;
    // } else {
    //   curSlide--;
    // }
    // goToSlide(curSlide);}
  );
  document.addEventListener("keydown", function (e) {
    // if (e.key === "ArrowRight") {
    //   nextSlide();
    // } else if (e.key === "ArrowLeft") {
    //   prevSlide();
    // }
    // or
    // console.log(e);
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      // console.log(slide);

      goToSlide(slide);
      //   slides.forEach((s, i) => {
      //     s.style.transform = `translateX(${100 * (i - slide)}%)`;
      //   });
      activeDot(slide);
    }
  });
};
slider();
