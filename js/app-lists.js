function popUp() {
  document.querySelector('.popup-content').style.display = 'block';
  document.querySelector('.popup-black-overlay').style.display = 'block';
}

function popUpClose() {
  document.querySelector('.popup-content').style.display = 'none';
  document.querySelector('.popup-black-overlay').style.display = 'none';
}

function counterAdd() {
  var input = document.querySelector('.counter-input');
  if (input.value < 99) {
    input.value++;
  }
}

function counterTake() {
  var input = document.querySelector('.counter-input');
  if (input.value > 0) {
    input.value--;
  }
}
