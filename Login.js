const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});