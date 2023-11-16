const imgs = document.querySelectorAll('.img');
const fullScreen = document.querySelector('.full-screen');
const fullScreenPhoto = document.querySelector('.full-screen-photo');
const body = document.querySelector('.body');
const cross = document.querySelector('.cross');


imgs.forEach(el => {
    el.addEventListener('click', () => {
        fullScreen.classList.add('flex');
        body.classList.add('hidden');
        fullScreenPhoto.src = el.currentSrc;
    })
})

cross.addEventListener('click', () => {
    fullScreen.classList.remove('flex');
    body.classList.remove('hidden');
    fullScreenPhoto.src = '';
})