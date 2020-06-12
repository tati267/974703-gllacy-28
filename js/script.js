//Slider
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var sitewrapper = document.querySelector(".site-wrapper");
var slidercontrols = document.querySelector(".slider-controls");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  sitewrapper.classList.remove("site-wrapper-2");
  sitewrapper.classList.remove("site-wrapper-3");
  sitewrapper.classList.add("site-wrapper-1");
  slidercontrols.classList.add("current");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  sitewrapper.classList.remove("site-wrapper-1");
  sitewrapper.classList.remove("site-wrapper-3");
  slidercontrols.classList.add("current");
  sitewrapper.classList.add("site-wrapper-2");
});

btn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  sitewrapper.classList.remove("site-wrapper-1");
  sitewrapper.classList.remove("site-wrapper-2");
  sitewrapper.classList.add("site-wrapper-3");
  slidercontrols.classList.add("current");
});


//Popup
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