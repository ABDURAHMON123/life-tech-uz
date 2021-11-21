document.querySelector('.fa-bars').addEventListener('click', function() {
    let mobile = document.querySelector('.mobile__bars');
    mobile.style.transform = 'translateX(0)'


})
document.querySelector('.fa-close').addEventListener('click', function() {
    let mobile = document.querySelector('.mobile__bars');
    mobile.style.transform = 'translateX(100%)'
})
document.querySelector('.royhat').addEventListener('click', function() {
    let mobile = document.querySelector('.register');
    mobile.style.transform = 'translateX(0)'
})
document.querySelector('.yuborish').addEventListener('click', function() {
    let mobile = document.querySelector('.register');
    mobile.style.transform = 'translateX(-200%)'
})