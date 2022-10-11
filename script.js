const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
        console.log('Name is required');
    } else {
        console.log('Success');
    }

    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
        console.log('Email is required');
    } else {
        console.log('Success');
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
        console.log('Password must be longer than 6 characters');
    } else {
        console.log('Success');
        messages.push('Succesfully logged in, welcome!')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        e.preventDefault();
    } 
})
