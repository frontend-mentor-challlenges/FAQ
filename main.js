const click = document.getElementsByClassName("click");
const info = document.getElementsByClassName("info");

Array.from(click).forEach((item, index) => {
  item.addEventListener("click", (event) => {
    const img = item.querySelector("img");
    img.src = img.src.includes("icon-plus.svg")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";

    info[index].classList.toggle("active");
  });
});
