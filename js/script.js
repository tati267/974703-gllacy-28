//Slider
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var textSlider1 = document.querySelector("#slider1");
var textSlider2 = document.querySelector("#slider2");
var textSlider3 = document.querySelector("#slider3");
var siteWrapper = document.querySelector(".site-wrapper");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteWrapper.classList.remove("site-wrapper-2");
  siteWrapper.classList.remove("site-wrapper-3");
  siteWrapper.classList.add("site-wrapper-1");
  btn2.classList.remove("current");
  btn3.classList.remove("current");
  btn1.classList.add("current");
  textSlider2.classList.remove("slider-current");
  textSlider3.classList.remove("slider-current");
  textSlider1.classList.add("slider-current");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteWrapper.classList.remove("site-wrapper-1");
  siteWrapper.classList.remove("site-wrapper-3");
  siteWrapper.classList.add("site-wrapper-2");
  btn1.classList.remove("current");
  btn3.classList.remove("current");
  btn2.classList.add("current");
  textSlider1.classList.remove("slider-current");
  textSlider3.classList.remove("slider-current");
  textSlider2.classList.add("slider-current");
});

btn3.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteWrapper.classList.remove("site-wrapper-1");
  siteWrapper.classList.remove("site-wrapper-2");
  siteWrapper.classList.add("site-wrapper-3");
  btn1.classList.remove("current");
  btn2.classList.remove("current");
  btn3.classList.add("current");
  textSlider1.classList.remove("slider-current");
  textSlider2.classList.remove("slider-current");
  textSlider3.classList.add("slider-current");
});


//Popup
var link = document.querySelector(".contacts-block-button");
var popup = document.querySelector(".popup");
var popupWrap = document.querySelector(".overlay");
var popupClose = popup.querySelector(".popup-close");


link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup-show");
popupWrap.classList.add("overlay-show");
});

popupClose.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("popup-show");
popupWrap.classList.remove("overlay-show");
popup.classList.remove("popup-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popupWrap.classList.remove("overlay-show");
    }
  }
});
