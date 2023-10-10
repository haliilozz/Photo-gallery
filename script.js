"use strict";
const boxs = document.querySelectorAll(".box");
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    removeActiveclasses();
    box.classList.add("active");
  });
});
function removeActiveclasses() {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
}
