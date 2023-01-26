let buttons = function () {
  let second = document.querySelector(".first");
  let first = document.querySelector(".second");

  document
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
};
export { buttons };
