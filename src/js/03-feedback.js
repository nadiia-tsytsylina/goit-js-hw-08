let throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const settings = {};

updateSettings();
form.addEventListener('submit', saveMessage);
form.addEventListener('input', throttle(onFormInput, 500));

function saveMessage(evt) {
  evt.preventDefault();
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(settings);
}

function onFormInput(evt) {
  settings[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
}

function updateSettings() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    settings.email = JSON.parse(savedData).email;
    settings.message = JSON.parse(savedData).message;
    email.value = settings.email;
    message.value = settings.message;
  }
}
