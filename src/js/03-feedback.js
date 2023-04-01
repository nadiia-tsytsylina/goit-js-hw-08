let throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const settings = {
  email: '',
  message: '',
};

updateSettings();
form.addEventListener('submit', saveMessage);
email.addEventListener('input', throttle(onEmailInput, 500));
message.addEventListener('input', throttle(onMessageInput, 500));

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
  updateSettings();
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(settings);
}

function onEmailInput(evt) {
  const value = evt.target.value;
  settings.email = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
}

function onMessageInput(evt) {
  const value = evt.target.value;
  settings.message = value;
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
