'use script';
const cardSection = document.querySelector('.card-section');
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.card-name');
const cardMonth = document.querySelector('.month');
const cardYear = document.querySelector('.year');
const cardCvc = document.querySelector('.cvnum');

const form = document.querySelector('.form');
const cardNameField = document.getElementById('card-name');
const cardNumberField = document.getElementById('card-number');
const cardMonthField = document.getElementById('month');
const cardYearField = document.getElementById('year');
const cardCvcField = document.getElementById('cvc');
const inputDetails = document.querySelectorAll('.input');

const confirmButton = document.querySelector('.confirm-btn');
const completeButton = document.querySelector('.complete-btn');
const completeMessage = document.querySelector('.complete');
const cardNameError = document.querySelector('.card-name-error');
const cardNumberError = document.querySelector('.card-number-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');
const cvcError = document.querySelector('.cvc-error');

const format = function (s) {
  return s.toString().replace(/\d{4}(?=.) /g, '$&');
};

const setCardName = function (e) {
  cardName.innerText = e.target.value;
};

const setCardNumber = function (e) {
  cardNumber.innerText = format(e.target.value);
};
const setCardMonth = function (e) {
  cardMonth.innerText = e.target.value;
};
const setCardYear = function (e) {
  cardYear.innerText = e.target.value;
};
const setCardCvc = function (e) {
  cardCvc.innerText = e.target.value;
};

const setCompleteButton = function () {
  form.style.display = 'block';
  completeMessage.style.display = 'none';
};

const handleSubmit = function (e) {
  e.preventDefault();
  if (!cardNameField.value) {
    cardNameError.innerHTML = 'Please enter your name';
  }
  if (!cardNumberField.value) {
    cardNumberError.innerHTML = 'Please enter your card number';
  } 
  if (!cardMonthField.value) {
    monthError.innerHTML = 'Please enter month';
  }
  if (!cardYearField.value) {
    yearError.innerHTML = 'Please enter year';
  }
  if (!cardCvcField.value) {
    cvcError.innerHTML = 'Please enter cvc';
  }
  if (
    cardNameField.value &&
    cardNumberField.value &&
    cardMonthField.value &&
    cardYearField.value &&
    cardCvcField.value
  ) {
    completeMessage.style.display = 'block';
    form.style.display = 'none';
  }
};

cardNameField.addEventListener('keyup', setCardName);
cardNumberField.addEventListener('keyup', setCardNumber);
cardMonthField.addEventListener('keyup', setCardMonth);
cardYearField.addEventListener('keyup', setCardYear);
cardCvcField.addEventListener('keyup', setCardCvc);
confirmButton.addEventListener('click', handleSubmit);
completeButton.addEventListener('click', setCompleteButton);
