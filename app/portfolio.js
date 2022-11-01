const dark = document.querySelector('.dark');
const body = document.querySelector('body');

dark.addEventListener('click', (e)=> {
    body.classList.toggle('sun')
    e.preventDefault();
})
