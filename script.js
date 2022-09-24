//spinner
let all = document.querySelector(".all_in");
let spinner = document.querySelector(".spinner");

all.style.display = "none";

window.addEventListener("load", function () {
  all.style.display = "block";
  spinner.style.display = "none";
});

let sliders = document.querySelectorAll(".slide");
let currSlide = 0;
sliders.forEach((el, index) => {
  el.style.transform = `translateX(${index * 100}%)`;
});

let box = document.querySelector(".box");
let moveRight = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  move(currSlide);
};
let moveLeft = () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  move(currSlide);
};
let maxSlide = sliders.length;
let pointerRight = document
  .querySelector(".pointer-left")
  .addEventListener("click", moveLeft);

let pointerLeft = document
  .querySelector(".pointer-right")
  .addEventListener("click", moveRight);

let move = (slide) => {
  sliders.forEach((el, index) => {
    el.style.transform = `translateX(${(index - slide) * 110}%)`;
  });
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveRight();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  }
});
//scrolling
let nav = document.querySelector(".nav");

nav.addEventListener("click", function (e) {
  let id = e.target.getAttribute("href");
  if (id.startsWith("#")) {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    e.target.classList.contains("clicking");
  }
});

//projects
let first = document.querySelector(".first");
let second = document.querySelector(".second");

let buttons = document
  .querySelector(".projects__buttons")
  .addEventListener("click", function (el) {
    if (el.target.classList.contains("button1")) {
      first.classList.remove("hidecontent");
      adding(second);
    }
    if (el.target.classList.contains("button2")) {
      adding(first);
      second.classList.remove("hidecontent");
    }
  });

function adding(first) {
  first.classList.add("hidecontent");
}

//menu

let header = document.querySelector(".header");
function func(entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
let obesrver = new IntersectionObserver(func, {
  null: 0,
  threshold: 0,
});
obesrver.observe(header);

let navLinks = document.querySelector(".newmenu");
let x = document.querySelector(".x");
let svgHide = document.querySelector(".menu").addEventListener("click", () => {
  x.style.display = "block";
  navLinks.classList.add("make-menu");
  navLinks.style.display = "flex";
});
navLinks.addEventListener("click", (e) => {
  x.style.display = "none";
  navLinks.classList.remove("make-menu");
  navLinks.style.display = "none";
});
//revealing section
let sections = document.querySelectorAll(".section");
function funcSection(entries) {
  let entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observerSection.unobserve(entry.target);
  }
}
let observerSection = new IntersectionObserver(funcSection, {
  null: 0,
  threshold: 0.1,
});
sections.forEach((el) => {
  observerSection.observe(el);
  el.classList.add("section--hidden");
});
