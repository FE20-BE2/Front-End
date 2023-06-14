let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
document.getElementById("next").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft += widthItem;
};
document.getElementById("prev").onclick = function () {
  const widthItem = document.querySelector(".item").offsetWidth;
  document.getElementById("formList").scrollLeft -= widthItem;
};
