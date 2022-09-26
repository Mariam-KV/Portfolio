let sliders = function () {
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
};

export { sliders };
