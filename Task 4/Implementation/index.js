const nav = document.querySelector('nav');
const links = document.querySelectorAll('.nav-links')

const navOpen = document.getElementById('hamburger');
navOpen.addEventListener('click', function () {
    nav.classList.toggle('active');
})

const navClose = document.getElementById('close');
navClose.addEventListener('click', function () {
    nav.classList.remove('active');
})
// act
// msh 3arf a-control el onclick boarder :skull:
links.forEach(function (item) {
    item.addEventListener('click', function () {
        nav.classList.remove('active');
    })
})
