const _ = require('lodash');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedback = { email: '', message: '' };

feedbackForm.addEventListener('submit', onSubmit);

emailInput.addEventListener('input', event => {
  feedback.email = event.currentTarget.value;
  
  console.log(feedback);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
});

textarea.addEventListener('input', event => {
  feedback.message = event.currentTarget.value;
  console.log(feedback);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
});

// function onCheckLocalStorage() {
    
// }

// function onSubmit(event) {
//   event.preventDefault();

//   console.log(event.currentTarget.value);
//   const {
//     elments: { email, message },
//   } = event.currentTarget;
//   console.log(email.value);
//   event.currentTarget.reset();
// }
