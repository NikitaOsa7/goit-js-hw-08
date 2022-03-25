import { throttle } from "lodash";

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const submitButtonEl = document.querySelector('button');
const formEl = document.querySelector('.feedback-form');

const newEmail = JSON.parse(localStorage.getItem('feedback-form-state'));
const newMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (newEmail) {
    emailEl.value = newEmail.email;
    messageEl.textContent = newMessage.message;
}

let message = '';
let email = '';

let changeMessage = (event) => {
    message = event.currentTarget.value.toString();
}

let changeEmail = (event) => {
    email = event.currentTarget.value.toString();
}

messageEl.addEventListener("input", changeMessage);
emailEl.addEventListener("input", changeEmail);

formEl.addEventListener("input", throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }))
}, 500));



const onButonClick = () => {
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state")
    emailEl.value = '';
    messageEl.textContent = '';
};

submitButtonEl.addEventListener('click', onButonClick);

