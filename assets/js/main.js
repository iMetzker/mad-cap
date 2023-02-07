const mobileLines = document.querySelector('.menu-mobile-lines');
const selectPageMenu = document.querySelector('.menu ul');

mobileLines.onclick = () => {
const nav = document.querySelector('.nav-bar');
nav.classList.toggle('active');
}

selectPageMenu.onclick = () => {
    const aClick = document.querySelector('a');
    aClick.classList.toggle('active');
    }


