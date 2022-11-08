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
    cardNameField.classList.add('error');
    cardNameField.parentElement.classList.add('error_message');
  } else {
    cardNameField.classList.remove('error');
    cardNameField.parentElement.classList.remove('error_message');
  }
  if (!cardNumberField.value) {
    cardNumberField.classList.add('error');
    cardNumberField.parentElement.classList.add('error_message');
  } else {
    cardNumberField.classList.remove('error');
    cardNumberField.parentElement.classList.remove('error_message');
  }
  if (!cardMonthField.value) {
    cardMonthField.classList.add('error');
    cardMonthField.parentElement.classList.add('error_message');
  } else {
    cardMonthField.classList.remove('error');
    cardMonthField.parentElement.classList.remove('error_message');
  }
  if (!cardYearField.value) {
    cardYearField.classList.add('error');
    cardYearField.parentElement.classList.add('error_message');
  } else {
    cardYearField.classList.remove('error');
    cardYearField.parentElement.classList.remove('error_message');
  }
  if (!cardCvcField.value) {
    cardCvcField.classList.add('error');
    cardCvcField.parentElement.classList.add('error_message');
  } else {
    cardCvcField.classList.remove('error');
    cardCvcField.parentElement.classList.remove('error_message');
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

// cardNameField.addEventListener('keyup', function (e) {
//   e.preventDefault();
//   let cardNameValue = cardNameField.value;
//   let key = e.key;
//   let keyletters = key.match(/^[A-Za-z ]*$/);

//   if (cardNameValue === '') {
//     cardNameError.innerHTML = 'Please enter your name';
//   } else if (keyletters) {
//     cardName.innerHTML = cardNameValue;
//   } else {
//     cardNameField.setAttribute('disabled', '');
//     cardNameError.innerHTML = 'Wrong format, letters only!';
//   }
// });

// cardNumberField.addEventListener('keyup', function (e) {
//   let cardNumberValue = cardNumberField.value;
//   let key = e.key;
//   let keyNumbers = key.match(/^[0-9 ]*$/);

//   if (cardNumberValue.length === 0) {
//     cardNumberError.innerHTML = 'Please enter your card number';
//   } else if (keyNumbers) {
//     cardNumber.innerHTML = cardNumberValue;
//   } else if (key === 'Backspace') {
//     cardNumberField.setAttribute('enabled', '');
//   } else {
//     cardNumberField.setAttribute('disabled', '');
//     cardNumberError.innerHTML = 'Wrong format, numbers only!';
//   }
// });

// cardNumberField.addEventListener('input', function (e) {
//   e.target.value = e.target.value
//     .replace(/[^\dA-Z]/g, '')
//     .replace(/(.{4})/g, '$1 ')
//     .trim();
// });

// cardMonthField.addEventListener('input', function (e) {
//   let value = e.target.value;
//   let valueNumbers = value.match(/^[0-9 ]*$/);

//   if (value === '') {
//     monthError.innerHTML = 'Please enter month';
//   } else if (valueNumbers) {
//     cardMonth.innerHTML = valueNumbers;
//   } else {
//     monthError.innerHTML = 'Please enter month';
//     cardMonthField.setAttribute('disabled', '');
//   }
// });

// cardYearField.addEventListener('input', function (e) {
//   let value = e.target.value;
//   let valueNumbers = value.match(/^[0-9 ]*$/);

//   if (value === '') {
//     yearError.innerHTML = 'Please enter year';
//   } else if (valueNumbers) {
//     cardYear.innerHTML = valueNumbers;
//   } else {
//     yearError.innerHTML = 'Please enter year';
//     cardYearField.setAttribute('disabled', '');
//   }
// });

// cardCvcField.addEventListener('input', function (e) {
//   let value = e.target.value;
//   let valueNumbers = value.match(/^[0-9 ]*$/);

//   if (value === '') {
//     cvcError.innerHTML = 'Please enter cvc';
//   } else if (valueNumbers) {
//     cardCvc.innerHTML = valueNumbers;
//   } else {
//     cvcError.innerHTML = 'Please enter cvc';
//     cardCvcField.setAttribute('disabled', '');
//   }
// });

// confirmButton.addEventListener('click', function () {
//   if (cardNameField.value.length <= 0) {
//     cardNameError.innerHTML = 'Please enter your name';
//   } else if (cardNumberField.value.length <= 0) {
//     cardNumberError.innerHTML = 'Please enter your card number';
//   } else if (cardMonthField.value.length <= 0) {
//     monthError.innerHTML = 'Please enter month';
//   } else if (cardYearField.value.length <= 0) {
//     yearError.innerHTML = 'Please enter year';
//   } else if (cardCvcField.value.length <= 0) {
//     cvcError.innerHTML = 'Please enter cvc';
//   } else {
//     completeMessage.style.display = 'block';
//     form.style.display = 'none';
//   }
// });

// completeButton.addEventListener('click', function () {
//   completeMessage.style.display = 'none';
//   completeButton.style.width = '100%';
//   form.style.display = 'block';
// });
