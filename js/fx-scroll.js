const btnOff = document.querySelector('#toggle-menu');
const btnOn = document.querySelector('.cross');
const body = document.body;

function disableScroll(){
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}

function enableScroll(){
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    body.removeAttribute('data-position');
}

btnOff.addEventListener('click', (e) => {
    disableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOn.style.pointerEvents = 'auto';
})

btnOn.addEventListener('click', (e) => {
    enableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOff.style.pointerEvents = 'auto';
})


