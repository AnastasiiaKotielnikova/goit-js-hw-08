import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name = "email"]');
const text = document.querySelector('[name = "message"]');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

function onFormInput() {
    const object = { email: email.value, message: text.value }; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(object));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: text.value });
    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
}

const SavedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (SavedForm) {
        email.value = SavedForm.email;
        text.value = SavedForm.message;
    }



