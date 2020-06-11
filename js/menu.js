const ipad = window.matchMedia("screen and (max-width: 767px)")
const menu = document.querySelector(".menu");
const burguerButton = document.querySelector("#burger-menu");

ipad.addListener(validation)

function validation(event) {
  if (event.matches) {
    burguerButton.addEventListener("click", hideShow)
  } else {
    burguerButton.removeEventListener("click", hideShow)
  }

  console.log(event.matches);
}

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
