const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const terms = document.getElementById('terms');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if(!terms.checked){
    messages = ['You must agree to the terms'];
  }
  if(password.value.length <= 8){
    messages = ['Password must be at least 8 characters'];
  }
  if (email.value.indexOf('@') === -1){
    messages = ['Please enter a valid email'];
  }
  if (email.value === '' || email.value == null){
    messages = ['Email is required'];
  }
  if (name.value === '' || name.value == null){
    messages = ['Name is required'];
  }

  if (messages.length > 0){
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});