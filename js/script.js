var bookingBtn = document.querySelector(".booking-btn-title");
var bookingPopup = document.querySelector(".booking-form");
var dataArrive = bookingPopup.querySelector("[name=data-arrive]");
var dataDeparture = bookingPopup.querySelector("[name=data-departure]");

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!bookingPopup.classList.contains("booking-form-hidden")) {
      evt.preventDefault();
      bookingPopup.classList.remove("modal-show");
      bookingPopup.classList.add("booking-form-hidden");
      dataArrive.classList.remove("input-invalide");
      dataDeparture.classList.remove("input-invalide");
    }
  }
});

bookingBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.toggle("booking-form-hidden");
  if (!bookingPopup.classList.contains("booking-form-hidden")) {
    evt.preventDefault();
    bookingPopup.classList.add("modal-show");
  }
  if (bookingPopup.classList.contains("booking-form-hidden")) {
    evt.preventDefault();
    bookingPopup.classList.remove("modal-show");
    dataArrive.classList.remove("input-invalide");
    dataDeparture.classList.remove("input-invalide");
  }
});

bookingPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!dataArrive.value) {
    evt.preventDefault();
    dataArrive.classList.remove("input-invalide");
    dataArrive.offsetWidth = dataArrive.offsetWidth;
    dataArrive.classList.add("input-invalide");
  }
  if(!dataDeparture.value) {
    evt.preventDefault();
    dataDeparture.classList.remove("input-invalide");
    dataDeparture.offsetWidth = dataArrive.offsetWidth;
    dataDeparture.classList.add("input-invalide");
  }
  else {
    console.log("Отправляю форму");
  }
});


