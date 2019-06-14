var bookingBtn = document.querySelector(".booking-btn-title");
var bookingPopup = document.querySelector(".booking-form");
var dataArrive = bookingPopup.querySelector("[name=data-arrive]");
var dataDeparture = bookingPopup.querySelector("[name=data-departure]");
var mapImg = document.querySelector(".map-img");
var mapIframe = document.querySelector(".map-iframe");

bookingPopup.classList.add("hidden");
mapImg.classList.add("hidden");
mapIframe.classList.remove("hidden");

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!bookingPopup.classList.contains("hidden")) {
      evt.preventDefault();
      bookingPopup.classList.remove("modal-show");
      bookingPopup.classList.add("hidden");
      bookingPopup.classList.remove("input-invalide");
    }
  }
});

bookingBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.toggle("hidden");
  if (!bookingPopup.classList.contains("hidden")) {
    evt.preventDefault();
    bookingPopup.classList.add("modal-show");
  }
  if (bookingPopup.classList.contains("hidden")) {
    evt.preventDefault();
    bookingPopup.classList.remove("modal-show");
    bookingPopup.classList.remove("input-invalide");
  }
});

bookingPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!dataArrive.value||!dataDeparture.value) {
    evt.preventDefault();
    bookingPopup.classList.remove("input-invalide");
    bookingPopup.offsetWidth = bookingPopup.offsetWidth;
    bookingPopup.classList.add("input-invalide");
  }
  else {
    console.log("Отправляю форму");
  }
});


