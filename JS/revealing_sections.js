let revealing = function () {
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
};
export { revealing };
