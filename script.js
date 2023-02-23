const form = document.querySelector('.form-grid');
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const missmatchAlert = document.querySelector(".error-message")
const submitBtn = document.querySelector("#submit-btn")
const inputs = form.querySelectorAll('input');



function checkPasswordMatch() {
    if(password.value !== confirmPassword.value){
        missmatchAlert.style.display = 'block';
    }else {
        missmatchAlert.style.display = 'none';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidInputs = form.querySelectorAll('input:invalid');
  
    invalidInputs.forEach((input) => {
      input.classList.add('invalid');
    });
  
    if (invalidInputs.length > 0) {
      event.preventDefault();
    }
  });
  
  
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.classList.remove('invalid');
    });
  });

submitBtn.addEventListener("click", checkPasswordMatch)
