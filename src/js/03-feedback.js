const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedback = { email: '', message: '' };

feedbackForm.addEventListener('submit', onSubmit);

emailInput.addEventListener('input', event => {
  feedback.email = event.currentTarget.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
});

textarea.addEventListener('input', event => {
  feedback.message = event.currentTarget.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
});

const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedFeddback = JSON.parse(savedFeedback);

function onUpdateInput() {
  emailInput.value = parsedFeddback !== null ? parsedFeddback.email : '';
  textarea.value = parsedFeddback !== null ? parsedFeddback.message : '';
}
onUpdateInput();

function onSubmit(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.value);
  const {
    elements: { email, message },
  } = event.currentTarget;
  const currentFeedback = { email: email.value, message: message.value };
  console.log(currentFeedback);
  localStorage.clear();
  event.currentTarget.reset();
}
