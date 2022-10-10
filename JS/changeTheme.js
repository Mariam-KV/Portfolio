let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let purple = document.querySelectorAll(".purple");
let btn = document.querySelector(".btn");
let sticky = document.querySelector(".sticky");
let projectTitle = document.querySelectorAll(".description");
let projectTitle2 = document.querySelectorAll(".projectDescription");
//let menu = document.querySelector(".make-menu");

export let changeTheme = function () {
  sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    document.body.style.backgroundColor = "#4D47B8";
    document.body.style.color = "#FFFFFF";
    btn.style.backgroundColor = "#FFFFFF";

    //

    //menu.style.backgroundColor = "#4D47B8";

    btn.style.color = "#4D47B8";
    purple.forEach((el) => {
      el.style.color = "#FFFFFF";
      el.style.fill = "#FFFFFF";
      el.style.borderColor = "#FFFFFF";
    });
    projectTitle.forEach((el) => {
      el.style.color = "#FFFFFF";
    });
    projectTitle2.forEach((el) => {
      el.style.color = "#FFFFFF";
    });
  });
  moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#f9f7fe ";
    document.body.style.color = "#343a40";
    btn.style.backgroundColor = "#4D47B8";
    btn.style.color = "#FFFFFF";

    projectTitle.forEach((el) => {
      el.style.color = "#4D47B8";
    });
    projectTitle2.forEach((el) => {
      el.style.color = "#4D47B8";
    });
    purple.forEach((el) => {
      el.style.color = "#4D47B8";
      el.style.fill = "#4D47B8";
      el.style.borderColor = "#4D47B8";
    });
  });
};
