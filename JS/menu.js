let menu = function () {
  let nav = document.querySelector(".nav");

  nav.addEventListener("click", function (e) {
    let id = e.target.getAttribute("href");
    if (id.startsWith("#")) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      e.target.classList.contains("clicking");
    }
  });
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
  let svgHide = document
    .querySelector(".menu")
    .addEventListener("click", () => {
      x.style.display = "block";
      navLinks.classList.add("make-menu");
      navLinks.style.display = "flex";
    });
  navLinks.addEventListener("click", (e) => {
    x.style.display = "none";
    navLinks.classList.remove("make-menu");
    navLinks.style.display = "none";
  });
};
export { menu };
