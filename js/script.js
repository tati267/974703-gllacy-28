var link = document.querySelector(".contacts-block-button");
var popup = document.querySelector(".popup");
var popupwrap = document.querySelector(".overlay");
var popupclose = popup.querySelector(".popup-close");


link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup-show");
popupwrap.classList.add("overlay-show");
  });

popupclose.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("popup-show");
popupwrap.classList.remove("overlay-show");
popup.classList.remove("popup-error");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popupwrap.classList.remove("overlay-show");
    }
  }
});