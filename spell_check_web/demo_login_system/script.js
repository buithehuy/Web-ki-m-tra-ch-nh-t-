const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const introSection = document.querySelector('.intro-section');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    introSection.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    introSection.classList.remove('active');
});


function validateForm() {
    var checkbox = document.getElementById("agreeCheckbox");
    if (!checkbox.checked) {
        alert("Bạn phải đồng ý với điều khoản và điều kiện.");
        return false;
    }
    return true;
}