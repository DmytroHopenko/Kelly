const scrOff = document.querySelector('#toggle-menu');
const scrOn = document.querySelector('.cross');
const scrOn2 = document.querySelector('nav');
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
scrOff.addEventListener('click',(e)=>{
    disableScroll();
    /* e.currentTarget.style.pointerEvents = 'none';
    scrOn.style.pointerEvents = 'auto'; */
});
scrOn.addEventListener('click',(e)=>{
    enableScroll();
    /* e.currentTarget.style.pointerEvents = 'none';
    scrOff.style.pointerEvents = 'auto'; */
});
scrOn2.addEventListener('click',(e)=>{
    enableScroll();
    /* e.currentTarget.style.pointerEvents = 'none';
    scrOff.style.pointerEvents = 'auto'; */
})




