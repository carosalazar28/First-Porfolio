const menu = document.querySelector(".menu");
const burguerButton = document.querySelector("#burger-menu");

console.log("burguerButton")

burguerButton.addEventListener("click", hideShow)

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
