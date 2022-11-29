const toTop = document.querySelector('.arrow-up-but');

window.addEventListener('scroll', () =>{
    if( window.pageYOffset > 10){
        toTop.classList.add('active');
    } else(
        toTop.classList.remove('active')
    )
})