function addFunc() {
  let doing = document.getElementById("add");
  doing.classList.add("hide");
}

function removeFunc() {
  let doing = document.getElementById("add");
  doing.classList.remove("hide");
}
/*let links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href != "#" && href.startsWith("#")) {
      let imp = document.querySelector(href);

      imp.scrollIntoView({ behavior: "smooth" });
    }
  });
});
*/
let header = document.querySelector(".header");
let observer = new IntersectionObserver(
  function (entries) {
    let entry = entries[0];
    if (entry.isIntersecting === false) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(header);
