const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const error = document.querySelector('.error');
const patten = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const thankYou = document.querySelector('.thank-you-section');
const formSection = document.querySelector('.form-section');

form.addEventListener('submit', e=> {
    e.preventDefault();
    // console.log('I am clicking')
 //get the email from the form
 let email = form.email.value;
// validate if the email consist of the characters in the patten

if(patten.test(email)) {

    thankYou.style.display = "block";
    formSection.style.display = "none";
    
} else {
    error.textContent = "Valid email required";
    form.email.style.borderColor = "hsl(4, 100%, 67%)";
    form.email.style.backgroundColor = "hsl(4deg 100% 67% / 41%)";
    form.email.style.color = "hsl(4, 100%, 67%)";
}
})



