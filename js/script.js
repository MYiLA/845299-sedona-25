var bookingBtn = document.querySelector(".booking-btn-title");
var bookingPopup = document.querySelector(".booking-form");
var dataArrive = bookingPopup.querySelector("[name=data-arrive]");
var dataDeparture = bookingPopup.querySelector("[name=data-departure]");

dataArrive.focus();

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
  }
});

bookingPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!dataArrive.value || !dataDeparture.value) {
    evt.preventDefault();
    bookingPopup.classList.add("input-invalide");
  }
  else {
    console.log("Отправляю форму");
  }
});

// repaint-white-red

// попытка реализовать закрытие попапа с помощью ESC
// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (!bookingPopup.classList.contains("booking-form-hidden")) {
//       evt.preventDefault();
//       bookingPopup.classList.add("booking-form-hidden");
//     }
//   }
// });


